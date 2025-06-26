<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const budgetOptions = [
    { 
      value: '5-7.5k', 
      label: '$5K–$7.5K', 
      desc: 'Scoped MVP',
      highlight: true 
    },
    { 
      value: '7.5-15k', 
      label: '$7.5K–$15K', 
      desc: 'MVP + early advisory' 
    },
    { 
      value: '15k+', 
      label: '$15K+', 
      desc: 'Ready to scale' 
    },
    { 
      value: '<5k', 
      label: '<$5K', 
      desc: 'Limited budget',
      note: "We'll add you to our waitlist" 
    }
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 4: Budget Honesty Check</h2>
    <p class="text-stone-gray-400">What's your current working budget for this?</p>
  </div>
  
  <div class="space-y-3">
    {#each budgetOptions as option}
      <label class="flex items-start p-4 bg-fortress-gray-800 border-2 border-fortress-gray-700 cursor-pointer hover:border-steel-blue-400 transition-colors {data.budget === option.value ? 'border-steel-blue-400 bg-fortress-gray-700' : ''} {option.highlight ? 'ring-2 ring-steel-blue-400 ring-offset-2 ring-offset-bastion-black' : ''}">
        <input
          type="radio"
          name="budget"
          value={option.value}
          checked={data.budget === option.value}
          on:change={() => updateData({ budget: option.value })}
          class="mt-1 mr-3 cursor-pointer relative z-10"
        />
        <div class="flex-1">
          <p class="font-semibold flex items-center">
            {option.label}
            {#if option.highlight}
              <span class="ml-2 text-xs bg-steel-blue-600 text-off-white px-2 py-1">MOST POPULAR</span>
            {/if}
          </p>
          <p class="text-sm text-stone-gray-400">{option.desc}</p>
          {#if option.note}
            <p class="text-xs text-stone-gray-500 mt-1">{option.note}</p>
          {/if}
        </div>
      </label>
    {/each}
  </div>
</div>