import { buttonVariants, Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Loader2 } from "lucide-react";
import React from "react";

const QuizSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-64" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup className="flex flex-col">
          {[...Array(4)].map((_, idx) => (
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "default",
                }),
                "justify-start"
              )}
              key={idx}
            >
              <RadioGroupItem value="" id="" className="hidden" />
              <Label htmlFor="" className="font-bold">
                <Skeleton className="h-4 w-20" />
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Back
        </Button>
        <Button variant="default" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizSkeleton;
