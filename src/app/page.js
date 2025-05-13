import Image from "next/image";
import styles from "./page.module.css";
import Canvas from "../components/Canvas.js"







export default function Home() {
 
 
  return (
<>
<div>
<Canvas />
                <section className="bg-primary text-white text-center py-5">
          <div className="container text-center ">
            <h2 className="fw-bold text-center w-100">Let’s Work Together</h2>
            <hr  className="text-light"/>
            <p className="fs-5 mb-4">
              Transform your ideas into digital reality. Let’s discuss your project today.
            </p>
            <a href="/about" className="btn btn-light btn-lg px-4 shadow-sm rounded-pill m-auto">
              About
               <i className="bi bi-arrow-right-circle h5 ms-2 text-info"></i>
            </a>
          </div>
        </section>
</div>
</>
  );
}
