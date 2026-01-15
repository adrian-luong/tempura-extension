import { Plus } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/shadcn/card";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/shadcn/select";
import { TabsContent } from "@/components/shadcn/tabs";
import { Button } from "@/components/shadcn/button";
import Input from "@/components/shadcn/input";

export default function Timezones() {
    return (
        <TabsContent value="timezones">
            <Card className="w-full">
                <CardHeader>
                    <CardDescription>
                        Select timezones to compare datetime.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <div className="flex mb-2">
                        <div className="w-64 mr-2">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a timezone" />
                                </SelectTrigger>
                                <SelectContent></SelectContent>
                            </Select>
                        </div>
                        <div className="ml-4 flex flex-1">
                            <Input type="number" placeholder="Hours" className="w-28" />
                            <p className="p-2">:</p>
                            <Input type="number" placeholder="Minutes" className="w-28" />
                        </div>
                    </div>
                    <Button variant="outline" className="flex-1 mt-2"><Plus/></Button>
                </CardContent>
            </Card>
        </TabsContent>
    )
}