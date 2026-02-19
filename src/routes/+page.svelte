<script>
  /** @type {Array<{id: string, text: string, category: string}>} */
  let agenda = [];
  let newAgenda = "";

  const categories = ["Privat", "Arbeit", "Schule", "Sonstiges"];
  let selectedCategory = "Privat";

  function addAgenda() {
    if (newAgenda) {
      agenda = [
        ...agenda,
        {
          id: crypto.randomUUID(),
          text: newAgenda,
          category: selectedCategory,
        },
      ];
      newAgenda = "";
    }
  }

  /** @param {number} index */
  function removeAgenda(index) {
    agenda.splice(index, 1);
    agenda = [...agenda]; // Update the agenda array to trigger reactivity
  }
</script>

<main>
  <nav class="top-nav">
    <a href="/about" class="about-link">About</a>
  </nav>

  <h1>SvelteKit Agendas App</h1>
  <div class="add-agenda">
    <input
      class="agenda-input"
      bind:value={newAgenda}
      placeholder="Neuen Termin eingeben..."
    />

    <select class="category-select" bind:value={selectedCategory}>
      {#each categories as cat}
        <option value={cat}>{cat}</option>
      {/each}
    </select>

    <button class="add-button" on:click={addAgenda}>Hinzufügen</button>
  </div>

  <ul class="agenda-list">
    {#each agenda as item, index (item.id || index)}
      <li class="agenda-item">
        <div class="item-content">
          <span class="item-text">{item.text || item}</span>

          {#if item.category}
            <span class="category-badge">{item.category}</span>
          {/if}
        </div>

        <button class="remove-button" on:click={() => removeAgenda(index)}>Löschen</button>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 600px;
    margin: 40px auto;
  }

  h1 {
    color: #333;
  }

  .add-agenda {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
  }

  .agenda-input,
  .category-select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .category-select {
    background-color: #f9f9f9;
  }

  .add-button {
    padding: 8px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .agenda-list {
    list-style-type: none;
    padding: 0;
  }

  .agenda-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .item-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .category-badge {
    font-size: 0.75rem;
    background-color: #e9ecef;
    color: #495057;
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .remove-button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .top-nav {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
  }	

  .about-link {
        text-decoration: none;
        color: #666;
        font-size: 0.9rem;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 20px; /* Pill-Design */
        transition: all 0.2s ease;
  }

  .about-link:hover {
    background-color: #f0f0f0;
    color: #333;
	border-color: #999;
  }
</style>
