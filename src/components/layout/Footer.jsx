import { profile } from "../../data";

export default function Footer() {
  return <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>;
}
