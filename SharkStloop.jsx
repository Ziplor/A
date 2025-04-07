import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutGrid } from "lucide-react";

export default function SharkStloop() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <header className="flex items-center justify-between mb-10">
        <div className="text-2xl font-bold">Shark Stloop</div>
        <LayoutGrid className="w-6 h-6" />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[#1DB954] text-black hover:shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">13+ to 13-</h2>
            <Button className="bg-black text-white w-full">Go</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1DB954] text-black hover:shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">13- to 13+</h2>
            <Button className="bg-black text-white w-full">Go</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1DB954] text-black hover:shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Get TikTok Live Videos</h2>
            <Button className="bg-black text-white w-full">Fetch</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#1DB954] text-black hover:shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Get DSC Token</h2>
            <Button className="bg-black text-white w-full">Generate</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="mt-16 grid grid-cols-2 gap-4">
        <Button className="bg-red-600 hover:bg-red-700 w-full">TripleHook</Button>
        <Button className="bg-red-600 hover:bg-red-700 w-full">SQL Inject</Button>
      </footer>
    </div>
  );
}
