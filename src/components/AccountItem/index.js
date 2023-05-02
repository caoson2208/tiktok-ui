import classNames from "classnames/bind";
import styles from "./AccountIem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://images.unsplash.com/photo-1621359748534-8a83aba26934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Hoa"
      />

      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Cao Ngọc Sơn</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>caongocson</span>
      </div>
    </div>
  );
}

export default AccountItem;
