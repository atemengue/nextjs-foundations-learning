import style from "./styles.css";


export default function ConferenceLayout({ children }:{children: React.ReactNode}) {
  return (
    <>
      <header style={style.header}>
        <h1>GLOBOMANTICS MANIACALLY TAKINH TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  )
}