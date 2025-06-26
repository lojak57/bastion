<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const urgencyOptions = [
    { value: 'asap', label: 'ASAP', desc: 'Need it yesterday' },
    { value: '2-4weeks', label: '2–4 weeks', desc: 'Have a deadline coming up' },
    { value: '1-2months', label: '1–2 months', desc: 'Planning ahead' },
    { value: 'exploring', label: 'Just exploring', desc: 'No rush, gathering info' }
  ];
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 3: Urgency</h2>
    <p class="text-stone-gray-400">How soon do you need a working product?</p>
  </div>
  
  <div class="space-y-3">
    {#each urgencyOptions as option}
      <label class="flex items-start p-4 bg-fortress-gray-800 border-2 border-fortress-gray-700 cursor-pointer hover:border-steel-blue-400 transition-colors {data.urgency === option.value ? 'border-steel-blue-400 bg-fortress-gray-700' : ''}">
        <input
          type="radio"
          name="urgency"
          value={option.value}
          checked={data.urgency === option.value}
          on:change={() => updateData({ urgency: option.value })}
          class="mt-1 mr-3 cursor-pointer relative z-10"
        />
        <div>
          <p class="font-semibold">{option.label}</p>
          <p class="text-sm text-stone-gray-400">{option.desc}</p>
        </div>
      </label>
    {/each}
  </div>
</div>