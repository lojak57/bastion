<script lang="ts">
  export let data: any = {};
  export let updateData: (newData: any) => void;
  
  const handleChange = (field: string, value: any) => {
    updateData({ [field]: value });
  };
</script>

<div class="space-y-6">
  <div>
    <h2 class="text-2xl font-bold mb-2">Step 7: Contact Info</h2>
    <p class="text-stone-gray-400">Let's connect and build something great.</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="firstName" class="block text-sm font-medium mb-2">
        First Name <span class="text-steel-blue-400">*</span>
      </label>
      <input
        type="text"
        id="firstName"
        value={data.firstName || ''}
        on:input={(e) => handleChange('firstName', e.currentTarget.value)}
        class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none relative z-10"
        required
      />
    </div>
    
    <div>
      <label for="lastName" class="block text-sm font-medium mb-2">
        Last Name <span class="text-steel-blue-400">*</span>
      </label>
      <input
        type="text"
        id="lastName"
        value={data.lastName || ''}
        on:input={(e) => handleChange('lastName', e.currentTarget.value)}
        class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none relative z-10"
        required
      />
    </div>
  </div>
  
  <div>
    <label for="email" class="block text-sm font-medium mb-2">
      Email <span class="text-steel-blue-400">*</span>
    </label>
    <input
      type="email"
      id="email"
      value={data.email || ''}
      on:input={(e) => handleChange('email', e.currentTarget.value)}
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none"
      required
    />
  </div>
  
  <div>
    <label for="phone" class="block text-sm font-medium mb-2">
      Phone (Optional)
    </label>
    <input
      type="tel"
      id="phone"
      value={data.phone || ''}
      on:input={(e) => handleChange('phone', e.currentTarget.value)}
      placeholder="+1 (555) 123-4567"
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none"
    />
  </div>
  
  <div>
    <label for="company" class="block text-sm font-medium mb-2">
      Company (Optional)
    </label>
    <input
      type="text"
      id="company"
      value={data.company || ''}
      on:input={(e) => handleChange('company', e.currentTarget.value)}
      class="w-full px-4 py-3 bg-fortress-gray-800 border border-fortress-gray-700 text-off-white placeholder-stone-gray-500 focus:border-steel-blue-400 focus:outline-none"
    />
  </div>
  
  <div class="space-y-3 pt-4">
    <label class="flex items-center">
      <input
        type="checkbox"
        checked={data.wantsCall || false}
        on:change={(e) => handleChange('wantsCall', e.currentTarget.checked)}
        class="mr-3 w-5 h-5 accent-steel-blue-600 cursor-pointer"
      />
      <span>I want to book a 30-min call</span>
    </label>
    
    <label class="flex items-center">
      <input
        type="checkbox"
        checked={data.wantsQuoteFirst || false}
        on:change={(e) => handleChange('wantsQuoteFirst', e.currentTarget.checked)}
        class="mr-3 w-5 h-5 accent-steel-blue-600 cursor-pointer"
      />
      <span>Just give me a quote + feedback first</span>
    </label>
  </div>
</div>