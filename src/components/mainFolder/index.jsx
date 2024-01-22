import Form from "./form";
import "./index.css";

export default function MainForm() {
  return (
    <>
      <header>
        <div className="logo">
          <h2>Darkor</h2>
        </div>
        <ul>
          <li>
            <a href="#">Vakansiyalar</a>
          </li>
          <li>
            <a href="#">Kandidatlar</a>
          </li>
          <li>
            <a href="#">Kompaniyalar</a>
          </li>
          <li>
            <a href="#">Xizmatlar</a>
          </li>
          <li>
            <a href="#">Ta'lim</a>
          </li>
        </ul>
        <div>
          <select>
            <option value="uzb" selected>
              O'zb
            </option>
            <option value="uzb">Rus</option>
            <option value="uzb">Eng</option>
          </select>
        </div>
        <button className="header_button">Boshlash</button>
      </header>

      <Form />
    </>
  );
}
