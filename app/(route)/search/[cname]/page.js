// app/search/[cname]/page.jsx
import Search from './Search' // или '@/app/_components/Search' ако е там

export default function Page({ params }) {
  return <Search cname={params.cname} />
}

