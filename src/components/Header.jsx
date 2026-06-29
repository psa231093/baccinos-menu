// thin hard-stop tricolore — a subtle nod to the brand, not a loud banner
const tricolore = {
  background:
    'linear-gradient(90deg, #1a7a3c 0 33.33%, #f4f1ea 33.33% 66.66%, #d12027 66.66% 100%)',
}

export default function Header() {
  return (
    <header className="bg-paper">
      <div style={tricolore} className="h-[3px] w-full" />
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-5 pt-6 text-center">
        <img
          src="/img/logo.png"
          alt="Bacino's Italian Grill"
          className="h-16 w-auto sm:h-[4.5rem]"
          width="744"
          height="297"
        />

      </div>
    </header>
  )
}
