import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn/tabs';
import './App.css';

export default function App() {
  return (
    <section className="flex mw-full min-w-3xl flex-col gap-6">
      <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="timezones">Timezones</TabsTrigger>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="about"><p>About</p></TabsContent>
        <TabsContent value="timezones"><p>Timezones</p></TabsContent>
        <TabsContent value="calculator"><p>Calculator</p></TabsContent>
        <TabsContent value="settings"><p>Settings</p></TabsContent>
      </Tabs>
    </section>
  );
}