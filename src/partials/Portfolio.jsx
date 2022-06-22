import negombo from "../images/negomobo.png";
import React from 'react';

export default function Portfolio() {
  return (
    <div class="flex min-h-screen items-center justify-center p-10 bg-white">
  <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
    <div class="flex rounded-md border border-slate-200">
      <div class="flex-1 p-10">
        <a href="https://prenotazioni.negombo.it/" target="_blank" className="hover:blitblue-300 hover:underline">
        <h3 class="text-xl font-medium text-gray-700">Negombo Booking System</h3>
        </a>
        <p class="mt-2 text-slate-500">Our Client from Italy Negombo, A highly unique and customized booking system for the Beach Resort in Negombo</p>
        <a href="" class="mt-2 inline-flex text-sky-500">Read More →</a>
      </div>

      <div class="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div class="absolute inset-0">
          <img src={negombo} class="h-full w-full object-cover object-center" alt="" />
        </div>
      </div>
    </div>
    <div class="flex rounded-md border border-slate-200">
      <div class="flex-1 p-10">
        <h3 class="text-xl font-medium text-gray-700">Respond faster, with automated chatbots</h3>
        <p class="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
        <a href="" class="mt-2 inline-flex text-sky-500">Read More →</a>
      </div>

      <div class="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div class="absolute inset-0">
          <img src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png" class="h-full w-full object-cover object-left-top" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
