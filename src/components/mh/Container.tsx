import { Container, ContainerProps } from "@mui/material";

interface CustomContainers extends ContainerProps {
    children: React.ReactNode
}

const CustomContainer: React.FC<CustomContainers> = ({ children, ...props }) => {
    return (
        <Container
            {...props}
            sx={{
                marginLeft: "auto",
                marginRight: "auto",
                "@media (min-width:0px)": {
                    maxWidth: "100%",
                },
                "@media (min-width:480px)": {
                    maxWidth: "440px",
                },
                "@media (min-width:768px)": {
                    maxWidth: "720px",
                },
                "@media (min-width:1025px)": {
                    maxWidth: "960px",
                },
                "@media (min-width:1440px)": {
                    maxWidth: "1440px",
                },
                ...props.sx,
            }}
        >
            {children}
        </Container>
    )
}

export default CustomContainer;