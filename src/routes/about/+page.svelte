<div class="container">
  <section class="content">
    <header>
      <h1>Über die Agenda-App</h1>
      <p class="subtitle">
        Entwickelt im Rahmen des DevOps-Moduls <span>M324</span>
      </p>
    </header>

    <div class="card-grid">
      <div class="card blue-border">
        <h2>🚀 Features</h2>
        <ul>
          <li>Automatisierte Build-Pipeline (GitHub Actions)</li>
          <li>Statisches Hosting (GitHub Pages)</li>
          <li>Modernes UI & Resolve-Logik</li>
        </ul>
      </div>

      <div class="card indigo-border">
        <h2>👥 Das Team</h2>
        <div class="team-list">
          <span class="badge">Manuel</span>
          <span class="badge">Kevin</span>
          <span class="badge">Livio</span>
        </div>
      </div>
    </div>

    <footer>
      <a href="/" class="btn">Zum Projekt</a>
    </footer>
  </section>
</div>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
    font-family: sans-serif;
    text-align: center;
  }
  .content {
    max-width: 800px;
    padding: 2rem;
  }
  h1 {
    color: #1e40af;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    color: #4b5563;
    font-size: 1.2rem;
  }
  .subtitle span {
    color: #2563eb;
    font-weight: bold;
  }

  .card-grid {
    display: grid;
    gap: 2rem;
    margin-top: 3rem;
  }
  .card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  .blue-border {
    border-top: 5px solid #3b82f6;
  }
  .indigo-border {
    border-top: 5px solid #6366f1;
  }

  .team-list {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
  }
  .badge {
    background: #eef2ff;
    color: #4338ca;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-weight: bold;
  }

  .btn {
    display: inline-block;
    margin-top: 3rem;
    background: #2563eb;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
    text-decoration: none;
    font-weight: bold;
  }
</style>
