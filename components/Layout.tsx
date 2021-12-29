import Head from "next/head";
import { ReactNode } from "react";

type LayoutProps = {
  readonly title?: string;
  readonly children?: ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="dark flex flex-col min-h-screen py-2 bg-slate-800 text-white">
      <Head>
        <title>{!!title ? `${title} - Cornell DTI` : "Cornell DTI"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul className="">
          <li>Projects</li>
          <li>Team</li>
          <li>Courses</li>
          <li>Sponsor</li>
          <li>Contact</li>
          <li>Apply</li>
        </ul>
      </nav>

      <main className="flex flex-col w-full flex-1">{children}</main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Made with &lt;3 in Ithaca
      </footer>
    </div>
  );
}
