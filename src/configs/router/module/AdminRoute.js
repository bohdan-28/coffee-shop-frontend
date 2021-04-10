import { React, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/user";

function PrivateRoute({ component: Component, ...rest }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (role !== null) {
    if (role !== 1) {
      history.goBack();
    }
  }

  return (
    role === 1 && (
      <Route {...rest} render={(props) => <Component {...props} />} />
    )
  );
}

export default PrivateRoute;
