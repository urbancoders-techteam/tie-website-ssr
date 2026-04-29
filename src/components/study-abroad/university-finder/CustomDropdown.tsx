"use client";

import React, {
    useDeferredValue,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type DropdownOption = {
    label: string;
    value: string;
};

interface CustomMultiSelectDropdownProps {
    label: string;
    options: Array<string | DropdownOption>;
    selectedValues: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    compact?: boolean;
    showFullSelectedText?: boolean;
    isLoading?: boolean;
    loadingText?: string;
}

const CustomMultiSelectDropdown: React.FC<CustomMultiSelectDropdownProps> = ({
    label,
    options,
    selectedValues,
    onChange,
    placeholder = "Select options",
    compact = false,
    showFullSelectedText = false,
    isLoading = false,
    loadingText = "Loading options...",
}) => {
    // Keep row height large enough for long labels (2 lines) to avoid overlap
    // while still preserving virtualization performance for big datasets.
    const ITEM_HEIGHT = compact ? 50 : 64;
    const MAX_LIST_HEIGHT = compact ? 210 : 256;
    const OVERSCAN = 5;

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);
    const [scrollTop, setScrollTop] = useState(0);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!wrapperRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    useEffect(() => {
        if (!open) return;
        setScrollTop(0);
        const timer = window.setTimeout(() => {
            searchInputRef.current?.focus();
        }, 0);
        return () => window.clearTimeout(timer);
    }, [open]);

    const normalizedOptions = useMemo<DropdownOption[]>(
        () =>
            options.map((option) =>
                typeof option === "string"
                    ? { label: option, value: option }
                    : { label: option.label, value: option.value }
            ),
        [options]
    );

    const selectedLabelMap = useMemo(() => {
        const map = new Map<string, string>();
        normalizedOptions.forEach((option) => {
            map.set(option.value, option.label);
        });
        return map;
    }, [normalizedOptions]);

    const toggleOption = (optionValue: string) => {
        if (selectedValues.includes(optionValue)) {
            onChange(selectedValues.filter((item) => item !== optionValue));
            return;
        }
        onChange([...selectedValues, optionValue]);
    };

    const removeOption = (optionValue: string) => {
        onChange(selectedValues.filter((item) => item !== optionValue));
    };

    const handleToggleOpen = () => {
        if (isLoading) return;
        setOpen((prev) => !prev);
    };

    const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (!isLoading) {
                setOpen((prev) => !prev);
            }
            return;
        }

        if (event.key === "Escape") {
            setOpen(false);
        }
    };

    const selectedValueSet = useMemo(() => new Set(selectedValues), [selectedValues]);

    const filteredOptions = useMemo(() => {
        const searchText = deferredQuery.trim().toLowerCase();
        if (!searchText) return normalizedOptions;
        return normalizedOptions.filter((option) =>
            option.label.toLowerCase().includes(searchText)
        );
    }, [normalizedOptions, deferredQuery]);

    const totalHeight = filteredOptions.length * ITEM_HEIGHT;
    const viewportHeight = Math.min(MAX_LIST_HEIGHT, totalHeight || ITEM_HEIGHT);
    const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN);
    const endIndex = Math.min(
        filteredOptions.length,
        startIndex + Math.ceil(viewportHeight / ITEM_HEIGHT) + OVERSCAN * 2
    );
    const visibleOptions = filteredOptions.slice(startIndex, endIndex);
    return (
        <div
            className={
                compact
                    ? "rounded-xl border border-[#00999E]/30 bg-white p-2"
                    : "my-5 rounded-2xl border-2 border-[#00999E] bg-gradient-to-r from-[#a7d6d799] via-[#daf0f17f] to-white p-4 sm:p-5"
            }
        >
            <div className={compact ? "mb-1 text-left" : "mb-3 text-center md:text-left"}>
                <h2 className={compact ? "text-sm font-semibold" : "text-lg font-semibold"}>
                    {label}
                </h2>
            </div>

            <div ref={wrapperRef} className="relative w-full">
                <div
                    role="button"
                    tabIndex={0}
                    onClick={handleToggleOpen}
                    onKeyDown={handleTriggerKeyDown}
                    className={
                        compact
                            ? `flex w-full items-center justify-between rounded-lg border border-[#00999E] bg-white px-2.5 py-1.5 text-left text-xs font-medium text-slate-700 shadow-sm transition ${
                                isLoading
                                    ? "cursor-wait opacity-80"
                                    : "cursor-pointer hover:border-[#007f83]"
                            }`
                            : `flex w-full items-center justify-between rounded-lg border-2 border-[#00999E] bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 shadow-sm transition sm:px-4 sm:text-base ${
                                isLoading
                                    ? "cursor-wait opacity-80"
                                    : "cursor-pointer hover:border-[#007f83]"
                            }`
                    }
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-disabled={isLoading}
                >
                    <div className="min-w-0 flex-1">
                        {selectedValues.length ? (
                            compact ? (
                                <div className="flex flex-wrap items-center gap-1 py-0.5">
                                    {selectedValues.map((item) => {
                                        const selectedLabel = selectedLabelMap.get(item) || item;
                                        return (
                                            <span
                                                key={item}
                                                className={`inline-flex items-center gap-1 rounded-full bg-[#00999E]/12 px-1.5 py-0.5 text-[10px] font-medium text-[#007c80] ${showFullSelectedText ? "whitespace-normal break-words" : "max-w-[10rem]"}`}
                                                title={selectedLabel}
                                            >
                                                <span className={showFullSelectedText ? "" : "truncate"}>
                                                    {selectedLabel}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        removeOption(item);
                                                    }}
                                                    className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00999E]/20 text-[9px] leading-none text-[#006f73] transition hover:bg-[#00999E]/35"
                                                    aria-label={`Remove ${selectedLabel}`}
                                                    title={`Remove ${selectedLabel}`}
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-1.5 py-0.5">
                                {selectedValues.map((item) => {
                                    const selectedLabel = selectedLabelMap.get(item) || item;
                                    return (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-1 rounded-full bg-[#00999E]/15 px-2 py-1 text-xs font-medium text-[#007c80]"
                                    >
                                        {selectedLabel}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                removeOption(item);
                                            }}
                                            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#00999E]/20 text-[11px] leading-none text-[#006f73] transition hover:bg-[#00999E]/35"
                                            aria-label={`Remove ${selectedLabel}`}
                                            title={`Remove ${selectedLabel}`}
                                        >
                                            ×
                                        </button>
                                    </span>
                                    );
                                })}
                                </div>
                            )
                        ) : (
                            <span className="text-slate-500">
                                {isLoading ? loadingText : placeholder}
                            </span>
                        )}
                    </div>

                    {isLoading ? (
                        <span className="ml-3 h-4 w-4 animate-spin rounded-full border-2 border-[#00999E]/30 border-t-[#00999E]" />
                    ) : (
                        <span className={`ml-3 text-[#00999E] transition-transform ${open ? "rotate-180" : ""}`}>
                            ▼
                        </span>
                    )}
                </div>

                {open ? (
                    <div
                        className={
                            compact
                                ? "absolute z-20 mt-1 w-full rounded-lg border border-[#00999E]/40 bg-white p-1.5 shadow-xl"
                                : "absolute z-20 mt-2 w-full rounded-lg border border-[#00999E]/40 bg-white p-2 shadow-xl"
                        }
                    >
                        {!isLoading ? (
                            <div className={compact ? "mb-1.5" : "mb-2"}>
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setScrollTop(0);
                                    }}
                                    placeholder="Type to search options..."
                                    className={
                                        compact
                                            ? "w-full rounded-md border border-[#00999E]/40 px-2.5 py-1.5 text-xs outline-none transition focus:border-[#00999E] focus:ring-2 focus:ring-[#00999E]/20"
                                            : "w-full rounded-md border border-[#00999E]/40 px-3 py-2 text-sm outline-none transition focus:border-[#00999E] focus:ring-2 focus:ring-[#00999E]/20"
                                    }
                                />
                            </div>
                        ) : null}

                        <div
                            className="overflow-auto rounded-md"
                            style={{ maxHeight: `${MAX_LIST_HEIGHT}px`, height: `${viewportHeight}px` }}
                            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
                            role="listbox"
                            aria-multiselectable="true"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2 py-3 text-sm text-slate-500">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#00999E]/30 border-t-[#00999E]" />
                                    <span>{loadingText}</span>
                                </div>
                            ) : filteredOptions.length ? (
                                <div
                                    style={{ height: `${totalHeight}px`, position: "relative" }}
                                >
                                    {visibleOptions.map((option, index) => {
                                        const optionIndex = startIndex + index;
                                        const checked = selectedValueSet.has(option.value);
                                        return (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => toggleOption(option.value)}
                                                className={`flex items-start gap-3 rounded-md px-3 pt-2 text-left ${compact ? "text-xs" : "text-sm"} transition ${checked
                                                        ? "bg-[#00999E]/12 text-[#006f73]"
                                                        : "hover:bg-slate-50"
                                                    }`}
                                                style={{
                                                    height: `${ITEM_HEIGHT}px`,
                                                    width: "100%",
                                                    position: "absolute",
                                                    top: `${optionIndex * ITEM_HEIGHT}px`,
                                                    left: 0,
                                                }}
                                                role="option"
                                                aria-selected={checked}
                                            >
                                                <span
                                                    className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] ${checked
                                                            ? "border-[#00999E] bg-[#00999E] text-white"
                                                            : "border-slate-400 bg-white text-transparent"
                                                        }`}
                                                >
                                                    ✓
                                                </span>
                                                <span className="line-clamp-2 break-words whitespace-normal leading-snug">
                                                    {option.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-3 text-center text-sm text-slate-500">
                                    No matching options found.
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CustomMultiSelectDropdown;
