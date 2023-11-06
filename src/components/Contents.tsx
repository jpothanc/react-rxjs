import useContextTheme from "../hooks/useContextTheme";
import useRxjsTheme from "../hooks/useRxjsTheme";
import { getThemeColor } from "../services/helper";

const Contents = () => {
  const { mode } = useContextTheme();
  const rxjsMode = useRxjsTheme();

  return (
    <>
      <div className="container__left">
        <div className="box-header">Contents</div>
        <div
          className="box-content-right"
          style={{
            background: getThemeColor(rxjsMode, false),
          }}
        >
          <p
            className="basic-text"
            style={{
              color: getThemeColor(rxjsMode, true),
            }}
          >
            {" "}
            <p className="blue-text">
              This is rendered using the rxjs theme change event.
            </p>
            <br></br>
            <ul>
              <li>
                Create an RxJS Subject or Observable to represent the shared
                state.
              </li>
              <li>
                Components can subscribe to this observable to receive state
                updates.
              </li>
              <li>
                When the state changes, notify all subscribers, ensuring
                real-time updates.
              </li>
              <li>
                RxJS offers powerful operators for managing complex state
                transformations.
              </li>
              <li>
                Subscriptions should be properly unsubscribed to prevent memory
                leaks.
              </li>
            </ul>
            <br></br>
            This project uses Inversify and Rxjs is publish real-time events to
            components. Check this how to wire Inversify in your project.
            <br></br>
            <br></br>
            <a
              className="my-link"
              href="https://medium.com/@kaljessy/react-dependency-injection-using-inversify-b4e1d63abc72"
              target="_blank"
            >
              Inversify React
            </a>
            <br></br>
            <a
              className="my-link"
              href="https://medium.com/@kaljessy/react-state-management-using-rxjs-58a4d523d611"
              target="_blank"
            >
              React State Management Using Rxjs
            </a>
          </p>
        </div>
        <hr></hr>
        <div
          className="box-content-right"
          style={{
            background: getThemeColor(mode, false),
          }}
        >
          <p
            className="basic-text"
            style={{
              color: getThemeColor(mode, true),
            }}
          >
            <p className="blue-text">
              This is rendered using the useContext react hook.
            </p>

            <br></br>

            <ul>
              <li>Create a React context to encapsulate the shared state.</li>
              <li>
                Provider components set the state value and make it accessible
                to child components.
              </li>
              <li>
                Consumer components can use the useContext hook to access the
                shared state.
              </li>
              <li>
                useContext simplifies state sharing without prop drilling.
              </li>
              <li>
                Context can be particularly useful for simpler state sharing
                needs within a component tree.
              </li>
            </ul>
            <br></br>
            <br></br>
            <a
              className="my-link"
              href="https://react.dev/reference/react/useContext"
              target="_blank"
            >
              React useContext
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contents;
