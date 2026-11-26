// @ts-nocheck
import { Typography } from '@mui/material'
import React from 'react'
import Header from "@/portal/Component/content-component/Header"
import ContentContainer from "@/portal/Component/grid-component/ContentContainer"
import ImageContainer from "@/portal/Component/grid-component/ImageContainer"
import MainContainer from "@/portal/Component/grid-component/MainContainer"

const ImmigrationBanner = ({data}) => {
    return (
        <>
            <MainContainer
                dir="column-reverse"
                color={"#EFFDFF"}
                com1={<ImageContainer img={data?.image} />}
                com2={
                    <ContentContainer
                        Header={<Header content={data?.title} fontSize={{ xs: "24px", sm: "26px", md: "40px", lg: "40px" }} />}
                        Content={
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontFamily: "Nunito, sans-serif",
                                    margin: "8px 0",
                                    color: '#525560',
                                    fontWeight: 500,
                                    textAlign: "justify",
                                }}
                            >
                                {
                                    data?.content
                                }
                            </Typography>

                        }

                    />
                }
            />

        </>
    )
}

export default ImmigrationBanner
