'use client'
import { Container, ContainerProps } from "@mui/material";

interface CustomContainers extends ContainerProps {
    children: React.ReactNode
}

const CustomContainer: React.FC<CustomContainers> = ({ children, sx, ...props }) => {
    return (
        <Container
            {...props}
            sx={{
                mx: "auto",
                p: 0,
                maxWidth: {
                    xs: "100%",
                    sm: "440px",
                    md: "720px",
                    lg: "960px",
                    xl: "1440px",
                },
                ...sx,
            }}
        >
            {children}
        </Container>
    )
}

export default CustomContainer;