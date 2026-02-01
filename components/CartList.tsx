import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: "pc_001",
    title: "Next.js Dashboard Starter",
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    count: 1284,
  },
  {
    id: "pc_002",
    title: "React + Tailwind UI Kit",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    count: 982,
  },
  {
    id: "pc_003",
    title: "Admin Panel Design System",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    count: 1763,
  },
  {
    id: "pc_004",
    title: "E-commerce Analytics Dashboard",
    badge: "New",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    count: 421,
  },
  {
    id: "pc_005",
    title: "Mobile App Wireframe Pack",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    count: 2097,
  },
  {
    id: "pc_006",
    title: "Landing Page Templates",
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1504691342899-bb63f4f9c5c3",
    count: 1540,
  },
];

const latestTransactions = [
  {
    id: "lt_001",
    title: "Payout to John Doe",
    badge: "Completed",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    count: 250,
  },
  {
    id: "lt_002",
    title: "Payout to Sarah Kim",
    badge: "Pending",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    count: 120,
  },
  {
    id: "lt_003",
    title: "Payout to Michael Tan",
    badge: "Failed",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    count: 980,
  },
  {
    id: "lt_004",
    title: "Payout to Emily Chen",
    badge: "Completed",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    count: 430,
  },
  {
    id: "lt_005",
    title: "Payout to David Park",
    badge: "Processing",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    count: 670,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">{title}</h1>

      <div className="flex flex-col gap-3">
        {list.map((item) => (
          <Card
            key={item.id}
            className="relative flex flex-row items-center gap-3 p-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="p-0">
              <CardTitle className="text-sm">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>

            <CardFooter className="ml-auto p-0 text-sm text-muted-foreground">
              {(item.count / 1000).toFixed(1)}k
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
