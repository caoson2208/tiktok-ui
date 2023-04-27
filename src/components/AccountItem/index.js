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
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/318b223610a8d80061471536d6b9fb97~c5_100x100.jpeg?x-expires=1682665200&x-signature=WX0GswFcFkqtmOlazFgK2hpxQxw%3D"
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
