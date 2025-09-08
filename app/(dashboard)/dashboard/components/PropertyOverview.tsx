"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
} from "lucide-react";

// Types
interface Property {
  id: number;
  title: string;
  status: "available" | "sold" | "pending";
  price: string;
  location: string;
  date: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
}

// Sample data
const properties: Property[] = [
  {
    id: 1,
    title: "شقة فاخرة",
    status: "available",
    price: "1,200,000 ر.س",
    location: "الرياض، حي الصحافة",
    date: "2023-10-15",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
    beds: 3,
    baths: 2,
    area: "150 م²",
  },
  {
    id: 2,
    title: "فيلا مودرن",
    status: "sold",
    price: "3,500,000 ر.س",
    location: "جدة، حي الروضة",
    date: "2023-09-22",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=250&fit=crop",
    beds: 5,
    baths: 4,
    area: "320 م²",
  },
  {
    id: 3,
    title: "أرض تجارية",
    status: "pending",
    price: "2,000,000 ر.س",
    location: "الدمام، حي الاتصالات",
    date: "2023-11-05",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
    beds: 0,
    baths: 0,
    area: "500 م²",
  },
  {
    id: 4,
    title: "شقة عائلية",
    status: "available",
    price: "950,000 ر.س",
    location: "مكة، حي العزيزية",
    date: "2023-12-10",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop",
    beds: 2,
    baths: 2,
    area: "110 م²",
  },
  {
    id: 5,
    title: "فيلا فاخرة",
    status: "sold",
    price: "4,250,000 ر.س",
    location: "الرياض، حي النخيل",
    date: "2023-08-15",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
    beds: 6,
    baths: 5,
    area: "450 م²",
  },
  {
    id: 6,
    title: "شقة راقية",
    status: "available",
    price: "1,750,000 ر.س",
    location: "الخبر، حي الكورنيش",
    date: "2023-11-20",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=250&fit=crop",
    beds: 4,
    baths: 3,
    area: "180 م²",
  },
];

// Status configuration
const statusConfig: Record<
  Property["status"],
  { label: string; className: string }
> = {
  available: {
    label: "متاحة",
    className: "bg-green-100 text-green-800 border-green-200",
  },
  sold: {
    label: "مباعة",
    className: "bg-blue-100 text-blue-800 border-blue-200",
  },
  pending: {
    label: "تحت الإجراء",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
};

// Property Card component
const PropertyCard = ({
  property,
  onAction,
}: {
  property: Property;
  onAction: (action: string, property: Property) => void;
}) => {
  const [imageError, setImageError] = useState(false);

  const fallbackSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="250" fill="#f3f4f6"/>
      <rect x="140" y="90" width="120" height="70" fill="#d1d5db"/>
    </svg>
  `)}`;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={imageError ? fallbackSvg : property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
          onError={() => setImageError(true)}
        />
        <Badge
          className={`absolute top-4 left-4 ${
            statusConfig[property.status].className
          }`}
        >
          {statusConfig[property.status].label}
        </Badge>
      </div>

      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold">{property.title}</h3>
          <span className="text-primary font-bold">{property.price}</span>
        </div>

        <div className="flex items-center text-muted-foreground mb-6">
          <MapPin className="w-4 h-4 ml-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex justify-between mb-6">
          {property.beds > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 text-muted-foreground ml-1" />
              <span className="text-sm text-muted-foreground">
                {property.beds} غرف
              </span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 text-muted-foreground ml-1" />
              <span className="text-sm text-muted-foreground">
                {property.baths} حمام
              </span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 text-muted-foreground ml-1" />
            <span className="text-sm text-muted-foreground">
              {property.area}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 ml-1" />
            <span>{property.date}</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onAction("view", property)}>
                <Eye className="w-4 h-4 ml-2" />
                <span>عرض</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onAction("edit", property)}>
                <Edit className="w-4 h-4 ml-2" />
                <span>تعديل</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => onAction("delete", property)}
              >
                <Trash2 className="w-4 h-4 ml-2" />
                <span>حذف</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

// Main component
export default function PropertyDashboard() {
  const handleAction = (action: string, property: Property) => {
    console.log(`Action: ${action}`, property);
  };

  return (
    <div className="bg-muted/40 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onAction={handleAction}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
