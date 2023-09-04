<script lang="ts">
    import { contacts } from "../store";
    import { v4 as uuidv4  } from "uuid"
    import { twMerge } from 'tailwind-merge'

    let name: string;
    let occupation: string;
    let email: string;
    let phone: string;


    const handleSubmit = () => {
        if(name === undefined || occupation === undefined || email === undefined || phone === undefined) return;

        contacts.add({
            id: uuidv4(),
            name,
            occupation,
            email,
            phone: Number(phone)
        })
    }

</script>

<section>
    <div class="flex items-center justify-between mb-8">
        <h3 class="font-bold text-xl">Add New Contact</h3>
        <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
        </button>
    </div>
   
    <form on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                </label>
                <input bind:value={name} class="appearance-none block w-full bg-[#fbfcff] text-gray-700 border border-[#bfc8e5] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Occupation
                </label>
                <input bind:value={occupation} class="appearance-none block w-full bg-[#fbfcff] text-gray-700 border border-[#bfc8e5] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Email
                </label>
                <input bind:value={email} type="email" class="appearance-none block w-full bg-[#fbfcff] text-gray-700 border border-[#bfc8e5] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Email">
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Phone
                </label>
                <input bind:value={phone} type="number" class="appearance-none block w-full bg-[#fbfcff] text-gray-700 border border-[#bfc8e5] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Phone">
            </div>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="submit" class={twMerge(`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`)}>
                Add Contact
            </button>
        </div>
    </form>
</section>