import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Credentials } from "../../../store/user/models";
import { userActions, userSelectors } from "../../../store/user/reducer";

export function HomeScreen() {
    const dispatch = useDispatch();
    const isUserAuthorized = useSelector(userSelectors.isUserAuthorized);
    const userLogin = useSelector(userSelectors.userLogin);
    const [ login, setLogin ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    function logIn() {
        const credentials: Credentials = {
            login: login,
            password: password,
        }
        dispatch(userActions.logIn(credentials));
    }

    if (isUserAuthorized) {
        return (<>
            <Alert>
              Welcome to interview {userLogin}!
            </Alert>
            </>);
    }

   
   return (<>
        <div className="grid grid-cols-3 gap-3 p-2">
            <Form>
                <FormGroup>
                    <Label for="login">
                        Login
                    </Label>
                    <Input
                    id="login"
                    name="login"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button onClick={logIn}>
                    Login
                </Button>
            </Form>
        </div>
    </>)
}

export default HomeScreen;