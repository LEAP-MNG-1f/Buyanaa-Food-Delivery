import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type DeliveryCardType = {
  _id: string;
  image: React.ComponentType;
  description: string;
  text: string;
};

type CardListProps = {
  cards: DeliveryCardType[];
};

export default function DeliveryCard(props: CardListProps) {
  return (
    <div className="flex justify-between">
      {props.cards.map((card) => {
        const IconComponent = card.image;
        return (
          <div key={card._id}>
            <Card sx={{ width: 265, height: 155 }}>
              <CardContent
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div className="p-[15px]">
                  <IconComponent />
                  {/* <DeliveryCardIcon1 /> */}
                </div>
                <div className="flex flex-col gap-1">
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "18px", color: "#272727" }}
                  >
                    {card.description}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75 }}>
                    {card.text}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
