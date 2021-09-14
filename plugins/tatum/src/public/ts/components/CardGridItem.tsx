import { Button, Card } from "antd";
import { CardItemText } from "./CardItemText";
import React from "react";

export const CardGridItem = ({
    hoverable = false,
    title,
    description,
    secondDescription,
    buttonText,
    buttonType,
    buttonLink
}: {
    hoverable?: boolean;
    title: string;
    description?: string;
    secondDescription?: string;
    buttonText: string;
    buttonType?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
    buttonLink?: string;
}) => {
    const gridStyle = {
        width: "100%",
        align: "center"
    };
    return (
        <Card.Grid hoverable={hoverable} style={gridStyle}>
            <div className="card-item-grid-content grid-table">
                <CardItemText title={title} description={description} secondDescription={secondDescription} />
                <Button type={buttonType}>
                    <a href={buttonLink} target="_blank" rel="noreferrer">
                        {buttonText}
                    </a>
                </Button>
            </div>
        </Card.Grid>
    );
};
