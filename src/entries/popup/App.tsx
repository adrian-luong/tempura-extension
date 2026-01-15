import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn/tabs';
import Timezones from '@/components/features/Timezones';
import './App.css';

export default function App() {
  return (
    <section className="flex min-w-xl flex-col gap-6">
      <Tabs defaultValue="timezones">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="timezones">Timezones</TabsTrigger>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="about"><p>About</p></TabsContent>
        <Timezones />
        <TabsContent value="calculator"><p>Calculator</p></TabsContent>
        <TabsContent value="settings"><p>Settings</p></TabsContent>
      </Tabs>
    </section>
  );
}