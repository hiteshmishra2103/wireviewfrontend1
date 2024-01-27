import React from "react";

const contact = () => {
    const [filled, setFilled] = React.useState(false);
    return (
        <div class="px-6 py-24 sm:py-32 lg:px-8">
            <div
                class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl "
                aria-hidden="true"
            >
                <div
                    class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Contact us
                </h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">
                    Contact us for any questions or concerns you may have. We will get in touch with you within 24 hours.
                </p>
            </div>
            <form class="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={(e) => {
                e.preventDefault();
                setFilled(true);
            }}>
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            for="first-name"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            First name
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                required
                                id="first-name"
                                autocomplete="given-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            for="last-name"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Last name
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"

                                autocomplete="family-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="company"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Company
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autocomplete="organization"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="email"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                autocomplete="email"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="phone-number"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Phone number (Along with country code)
                        </label>
                        <div class="relative mt-2.5">

                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autocomplete="tel"
                                required
                                class="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="message"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Message
                        </label>
                        <div class="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows="4"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button
                        type="submit"
                        class="cursor-pointer block w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    );
};

export default contact;
