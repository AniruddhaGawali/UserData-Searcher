import Head from "next/head";
import styles from "../styles/Home.module.css";
import Search from "../Components/search";
import Card from "../Components/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    let Data = await res.json();
    setData(Data);
    localStorage.setItem("userdata", JSON.stringify(Data));
  };

  useEffect(() => {
    if (localStorage.getItem("userdata") === null) {
      fetchdata();
    } else {
      const Data = JSON.parse(localStorage.getItem("userdata"));
      setData(Data);
      localStorage.setItem("userdata", JSON.stringify(Data));
    }
  }, []);

  const search = (e) => {
    const Data = JSON.parse(localStorage.getItem("userdata"));
    const search = e.target.value;
    if (search.length > 0) {
      const filtered = Data.filter((item) => {
        return item.username.toLowerCase().includes(search.toLowerCase());
      });
      setData(filtered);
    } else {
      setData(Data);
    }
  };

  const removeData = (id) => {
    console.log(id);
    const Data = JSON.parse(localStorage.getItem("userdata"));
    const newData = Data.filter((object) => {
      return object.id !== id;
    });
    console.log(newData);
    setData(newData);
    console.log(data);
    localStorage.setItem("userdata", JSON.stringify(newData));
  };

  const reloadData = () => {
    console.log("reload");
    localStorage.removeItem("userdata");
    fetchdata();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>User Data</title>
        <meta name="description" content="Search the UserName" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>User Data</h1>
        <Search
          handlersearch={search}
          reload={reloadData}
          title="Reload the complete data again"
        />
        <div className={styles.grid}>
          {data.map((itemdata, key) => (
            <Card data={itemdata} remove={removeData} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
}
