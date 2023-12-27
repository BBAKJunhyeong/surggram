"use client";

import { Button } from "src/ui/components";

export default function Home() {
  return (
    <main>
      <Button
        size="large"
        onClick={() => window.alert("클라이언트 컴포넌트에요")}
      >
        클라이언트 컴포넌트
      </Button>
    </main>
  );
}
