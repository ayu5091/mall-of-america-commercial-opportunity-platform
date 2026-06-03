'use client';

import CinematicHero from '@/components/sections/CinematicHero';
import WhyProperty from '@/components/sections/WhyProperty';
import Retail from '@/components/sections/Retail';
import Luxury from '@/components/sections/Luxury';
import DiningLifestyle from '@/components/sections/DiningLifestyle';
import Attractions from '@/components/sections/Attractions';
import EventsPlatform from '@/components/sections/EventsPlatform';
import Sponsorship from '@/components/sections/Sponsorship';
import LeasingPaths from '@/components/sections/LeasingPaths';
import EventsModule from '@/components/sections/EventsModule';
import VenueModules from '@/components/sections/VenueModules';
import ContactCTA from '@/components/sections/ContactCTA';
import SideNav from '@/components/navigation/SideNav';
import TopBar from '@/components/navigation/TopBar';
import MobileNav from '@/components/navigation/MobileNav';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function Home() {
  return (
    <div className="bg-[#0A0A0B] text-[#F5F5F5] snap-container">
      <LoadingScreen />
      <TopBar />
      <SideNav />
      <MobileNav />

      <main>
        <CinematicHero />
        <WhyProperty />
        <Retail />
        <Luxury />
        <DiningLifestyle />
        <Attractions />
        <EventsPlatform />
        <Sponsorship />
        <LeasingPaths />
        <EventsModule />
        <VenueModules />
        <ContactCTA />
      </main>
    </div>
  );
}
