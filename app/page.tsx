import Card from "@/components/Card";

async function Home() {



  return (
    
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <div>
        <h2 className="text-3xl text-white font-bold">Informations sur les abonnés</h2>

        <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 
        grid-cols-1 gap-10 mt-5">
          <Card title="Abonnés non locaux" href="/other-subscribers" />
          <Card title="Abonnés d'un site" href="/site-subscribers" />
          <Card title="Tous les abonnés" href="/all-subscribers" />
          <Card title="Ayant empruntés plus de 500 livres" href="/subscribers-borrow-more" />
          <Card title="Ayant plus de 10 retards" href="bad-subscribers" />
        </section>
      </div>

      <div>
        <h2 className="text-3xl text-white font-bold">Informations sur les livres</h2>

        <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 
        grid-cols-1 gap-10 mt-5">
          <Card title="Liste des livres par site" href="/books-peer-site" />
          <Card title="Liste des livres les plus sollicités" href="/more-sollicited-books" />
          <Card title="Liste des livres souvent en retard" href="/coming-late-books" />
          <Card title="Liste des livres perdus" href="/losed-books" />
          <Card title="Nombre de livres perdu à une date donnée" href="/books-borrowed-peer-date" />
          <Card title="Mise à jour d'un retour de prêt" href="/update-borrowed" />
        </section>
      </div>
      
      
    </main>
  );
}

export default Home;
