"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.js";
import emailjs from "@emailjs/browser";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [jangka1, setjangka1] = useState("5 Tahun");
  // const [jangka2, setjangka2] = useState("4 tahun");
  // const [jangka3, setjangka3] = useState("3 Tahun");
  // const [jangka4, setjangka4] = useState("2 tahun");
  // const [jangka5, setjangka5] = useState("1 Tahun");
  // const [jangka6, setjangka6] = useState("6 Bulan");
  const [jangka, setJangka] = useState("5 Tahun"); // Satu state untuk jangka waktu
  const [bank, setBank] = useState("BCA"); // Satu state untuk jenis bank
  const [noRek, setRek] = useState("");
  const [nameRek, setNameRek] = useState("");
  const router = useRouter();

  // const [isLoading, setIsloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const handleSignUp = async () => {
    let selectedJangka = [];
    // setIsLoading(true);

    emailjs
      .sendForm(
        "service_gbjvy6a",
        "template_cadohkk",
        form.current,
        "kcA2GGiK48cyi4fvx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
    // Menyimpan hanya jangka waktu yang dipilih oleh pengguna
    switch (jangka) {
      case "5 Tahun":
        selectedJangka.push({ name: "5 Tahun" });
        break;
      case "4 Tahun":
        selectedJangka.push({ name: "4 Tahun" });
        break;
      case "3 Tahun":
        selectedJangka.push({ name: "3 Tahun" });
        break;
      case "2 Tahun":
        selectedJangka.push({ name: "2 Tahun" });
        break;
      case "1 Tahun":
        selectedJangka.push({ name: "1 Tahun" });
        break;
      case "6 Bulan":
        selectedJangka.push({ name: "6 Bulan" });
        break;
      default:
        break;
    }

    let selectedBank = [];
    switch (bank) {
      case "BCA":
        selectedBank.push({ name: "BCA" });
        break;
      case "BRI":
        selectedBank.push({ name: "BRI" });
        break;
      case "BNI":
        selectedBank.push({ name: "BNI" });
        break;
      case "PERMATA":
        selectedBank.push({ name: "PERMATA" });
        break;
      case "CIMB NIAGA":
        selectedBank.push({ name: "CIMB NIAGA" });
        break;
      case "MANDIRI":
        selectedBank.push({ name: "MANDIRI" });
        break;
      default:
        break;
    }

    const res = await createUserWithEmailAndPassword(auth, email, password);

    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", res.user.uid), {
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      jangka: jangka,
      bank: bank,
      noRek: noRek,
      nameRek: nameRek,
      balance: 0,
    });
    // Implement your sign-up logic here
    // For simplicity, let's just add the new user to the JSON Server
    // await fetch("http://localhost:3001/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     fullname,
    //     email,
    //     password,
    //     jangka,
    //     bank,
    //     noRek,
    //     nameRek,
    //     balance: 0,
    //   }),
    // });

    // After signing up, you can redirect to the sign-in page or any other page
    router.push("/sign-in");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white md:border rounded-md md:shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form ref={form} onSubmit={handleSignUp}>
        <label className="block mb-4">
          Username:
          <div className="p-3 border rounded my-3">
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </label>
        <label className="block mb-4">
          Fullname:
          <div className="p-3 border rounded my-3">
            <input
              type="text"
              name="fullname"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </label>
        <label className="block mb-4">
          Email:
          <div className="p-3 border rounded my-3">
            <input
              type="email"
              name="email"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
        <label className="block mb-4">
          Password:
          <div className="p-3 border rounded my-3">
            <input
              type="password"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>
        {/* <div className="flex flex-col my-3">
            <label htmlFor="messageType" className="text-center">
              Jangka Waktu Menabung :
            </label>
            <div className="border-2 p-3 bg-white rounded">
              <select
                name="message_type"
                id="messageType"
                className="w-full outline-none border-none"
              >
                <option value="">Select</option>
                <option value="5 Tahun">5 Tahun</option>
                <input
                  type="5 Tahun"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka1}
                  onChange={(e) => setjangka1(e.target.value)}
                />
                <option value="4 Tahun">4 Tahun</option>
                <input
                  type="4 Tahun"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka2}
                  onChange={(e) => setjangka2(e.target.value)}
                />
                <option value="3 Tahun">3 Tahun</option>
                <input
                  type="3 Tahun"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka3}
                  onChange={(e) => setjangka3(e.target.value)}
                />
                <option value="2 Tahun">2 Tahun</option>
                <input
                  type="2 Tahun"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka4}
                  onChange={(e) => setjangka4(e.target.value)}
                />
                <option value="1 Tahun">1 Tahun</option>
                <input
                  type="1 Tahun"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka5}
                  onChange={(e) => setjangka5(e.target.value)}
                />
                <option value="6 Bulan">6 Bulan</option>
                <input
                  type="6 Bulan"
                  className="form-input mt-1 block w-full rounded-md outline-none border-none"
                  value={jangka6}
                  onChange={(e) => setjangka6(e.target.value)}
                />
              </select>
            </div>
          </div> */}
        {/* Jangka Waktu Menabung */}
        <div className="flex flex-col my-3">
          <label htmlFor="jangka" className="text-center">
            Jangka Waktu Menabung :
          </label>
          <div className="border-2 p-3 bg-white rounded">
            <select
              id="jangka"
              value={jangka}
              name="amount"
              onChange={(e) => setJangka(e.target.value)}
              className="w-full outline-none border-none"
            >
              <option value="5 Tahun">5 Tahun</option>
              <option value="4 Tahun">4 Tahun</option>
              <option value="3 Tahun">3 Tahun</option>
              <option value="2 Tahun">2 Tahun</option>
              <option value="1 Tahun">1 Tahun</option>
              <option value="6 Bulan">6 Bulan</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="bank" className="text-center">
            Jenis Bank :
          </label>
          <div className="border-2 p-3 bg-white rounded">
            <select
              id="bank"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full outline-none border-none"
            >
              <option value="BCA">BCA</option>
              <option value="BRI">BRI</option>
              <option value="BNI">BNI</option>
              <option value="PERMATA">PERMATA</option>
              <option value="CIMB NIAGA">CIMB NIAGA</option>
              <option value="MANDIRI">MANDIRI</option>
            </select>
          </div>
        </div>
        <label className="block mb-4">
          No Rekening :
          <div className="p-3 border rounded my-3">
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              value={noRek}
              onChange={(e) => setRek(e.target.value)}
            />
          </div>
        </label>
        <label className="block mb-4">
          Name Rekening:
          <div className="p-3 border rounded my-3">
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md outline-none border-none"
              value={nameRek}
              onChange={(e) => setNameRek(e.target.value)}
            />
          </div>
        </label>
      </form>
      <button
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
