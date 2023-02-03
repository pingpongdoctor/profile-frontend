import "./DrawerComponent.scss";

export default function DrawerComponent({ drawerDisplay }) {
  return (
    <div className="drawer">
      <ul className={`drawer__list ${drawerDisplay}`}>
        <li className="drawer__item">Home</li>
        <li className="drawer__item">About</li>
        <li className="drawer__item">Project</li>
        <li className="drawer__item">Contact</li>
      </ul>
    </div>
  );
}
