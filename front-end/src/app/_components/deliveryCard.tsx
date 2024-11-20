import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeliveryCardIcon1 } from "../svg/deliveryCardIcon_1";

export type DeliveryCardType = {
  _id: string;
  image: React.ElementType;
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
        return (
          <div key={card._id}>
            <Card
              sx={{
                width: 265,
                height: 155,
                boxShadow: "4px 4px 12px 0px , rgba(0, 0, 0, 0.10)",
                border: "1px solid",
                borderColor: "#D6D8DB",
                borderRadius: "16px",
              }}
            >
              <CardContent
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div className="p-[15px]">
                  {React.isValidElement(card.image) ? (
                    card.image
                  ) : (
                    <card.image />
                  )}
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
