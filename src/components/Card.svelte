<script lang="ts">
import { type IContact } from '../types/contact';
export let contact : IContact;

import { contacts } from "../store"
import UserProfile from "../assets/user.png";

</script>

<div class="flex space-x-3">
    <button on:click={()=> contacts.remove(contact.id)} class="absolute top-3 right-3 bg-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 32 32">
            <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
        </svg>
    </button>
    <div>
        <img src={UserProfile} alt="profile" class="w-[60px]" />
    </div>
    <div>
        <h3 class="font-bold text-xl">{contact.name}</h3>
        <p>{contact.occupation}</p>

        <div class="space-y-1 mt-2">
            <div class="flex space-x-2">
                <img class="w-[25px] h-[25px]" alt="email icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKElEQVR4nO3cTYhWVRzH8e+Y1UyFzhQljdGrQaVhLUIplEqKIMJVRItMsdxIuCttIe20pUSLFHFjuLFRQaO0NCjC6Y1KMLWMxixrNYWuNU78jt5wnO44z7kv5/l94G5m7vPcc87/ufd/7rnnXDAzMzMzMzMzMzMzMzMzMzMzM/vXALAM2AkcAc4A5zLfzqiuO1T30Aa16wPWAH81oIHO1byNAquB3rqCMQh8qcKcBT4AlgB3KlC56wPuUp0/LATmC7VNpcIBTxQKsa7qAjTQukJ7nKgyKH2FM+Mg8CgwArwO9NB9elT3EbXFQbXNcFWXrzU64FFguv52swqwtc5raA16VedhtQFqk2Nqo9dSF2BACTzkjMfGOHO2AZ8DM8jfDNV12xg583G10Wjq3tcyRX7/OKfvWuAXYC75mqs6rh3nMr1fbfViyoLs0EGW/89+zwJ/AovJz2LVLdRxPC+rrd5LWZh4bbyvxL4P6Ff0BvlYBfwKPFRi3zlqq3DzmMxpHWRayf0H1S8f6zrbJlcBW4BvgVtLfmaa2iq0WTKxnz3Rnsi7LU72NwCfANuBaypor0oO0KMuYOirP0h7zAF+BtYDUy7j840NSBuT/VMq6wuT+I7GBwSdISMNT/argJPAvEl+TysCEszU8MtmJcymmAq8DXwH3NaB72tNQIJrgSHgM+Am6ne9bub2TKAXmVVAYrIPl67jwGzqc7fuFzZcZvLOJiDRc0qgz1C9J4E/Eg1xtDYgwXzgtypGSAtWAKeAhYm+v9UBicn+a2ATcCVpk/dbwPfA7QmP0/qABNdpEPNT4EbSJO+Pgfc7mLyzDkgx2f8E3EvnzAJ+SJC8sw9I9LyS/dNM3hNK3kupTnYBCR7uQLKPyTs8865SlgEJbgG+Ad6ZYLK/QpenQ8AdVC/bgMRkvwvYV/I5dUjYuzVfLE7GqFrWAYm/+DAU/iNwD5cWJrAd1hkVurh1yT4g0XIl6EVcbAHwO7CS+nVNQIJH1PCv8N+JBafGmKJUl64KSPHStEHbYf2tKbIJyBTgTWBjiX2na8h8T8nkvUnf7RvDBg2dfOShk3JmenCxWcPvJz383oyA+AFVwx7hhlHd2dTHj3A9yaF504C+8jSgyfNEucxuDD2VtMO6cbL18dwmW3s5QkJesEPpBTv9+vH+nTIgR3WQMvcM3b6k7X61VZjlknzR50sZJe9WL/qMy6IPXOL/XhZ9wYEqlkUPaDH8WS2OL/KLAy5YVHhxQMglSa1W5I8VDuZXa3D+1Rr9moQR2uhVKtCrpc5++UxDXj4T+PVMF1tf1+uZokH9CmIh9mre7KyWvySgrD7Vdakm78V2GK4jGFGvhkRGCwXq1m1UOeNqGqBf3bsh3QjFO/qct9Oq65Dqnrw3ZWZmZmZmZmZmZmZmZmZmZmZmtME/lahsJJ0CAjgAAAAASUVORK5CYII=" />
                <span>{contact.email}</span>
            </div>
            <div class="flex space-x-2">
                <img class="w-[20px] h-[20px]" alt="phone icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADS0lEQVR4nO2ZS0hUURjHf6ZZGJWUVqYWGbQSMlpkRYtE2oRBRAVFmGIYZLWM1tKqwih6CLWpXUXagx4LSVr0EiwhIm3Rg4qg1J5oz4lD/wuHYebOXBnvnIH5wd3M/c7c79x7vv/5vu9AlixpZR3QA4wCfcByMox84DgQibqGgVIyhOlAlxwfAVqAIuCyfrtOBjAHeCyH3wJLo+591L1GHGYa0CtHnwLzY9hs1f1PwDwcZBJwR04+AWb62Ha4vMQOyLlXQFkCW7PEBmVfj2MMybHVSdpvk70ZV4JDjMqxwgBjrmmMWWrO8FxOVQYYU6agN+M24wgdcsioUhB2aFw/jtAih84GHFekcb+BHBxgIfAX+AJMDTBuuyZi8jFn6JJTO5O0nwy8dFGGN1nrPS8J+/2yfwRMwCFylZoY55oT2M4CPsu2FgfZIOfeAQU+du2yMxmxk+QAD+TkQZ/Y+CqbJhxmCfAT+AOsimOzxyq0FuAwrVbgF8T5cldl8zDBMkx7qdsnR03JG4tCSxw6JRZOUqVS1zja4LORfpBNuyu7eywarNp9WUyL/50VL/jbcJijliTH66DUWF/vMI4yEbgtJ+/6BHad1C6iitNJioEXcvKGxCAWG63JtLkaM4uA93LyvI9K1VnL7JSrarZYm6Bx8rTPG6+xBKAzznLMlZiYpNNsvgNKXENjBfAticCutqS5J6pPVmvtU9HXRWA2IbEG+GFNJt6XqbA2zSGVxl5GEFHcmVqmSPe8jNp0NLeENZn11mTO+MSCyQCuRL114/A+JaA25RITz65DfbRQvoy3zC74qJn5YrsVNydVz/jRaMXioPpo485K66E3EySQpjWbLKVW7yyiJTmXEPIyT5rvpbj7WG91Qod9UqWU7jNeM+JNih9YYomEketQMoBuPXDUJ2seCzP0v98JMTc7Zq3tEykqvPZa+V6oNFjN8QGJwliptqR+LWmgytrBTRpyCJgS8D8qLCE5QhrJVw/gl1XXNCfZBCwGnmncLS3btGMOVu9bsdOv9my8XnO5ld70BuxJjzs5agJ6bzmixvk5HWlU6njcZM+vLbkNLYkMSp4Oh7p0ChCJc3VrYhmBCeZdwCWp24iy39aAKU2WLKSQf3jSBy3qRwNwAAAAAElFTkSuQmCC">
                <span>{contact.phone}</span>
            </div>
        </div>
    </div>
</div>