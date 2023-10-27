import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, CardFooter, CardHeader } from "react-bootstrap";
import { toast } from "react-toastify";

function reducer(state, action) {
  switch (action.type) {
    case "PAY_REQUEST":
      return { ...state, loadingPay: true };
    case "PAY_SUCCESS":
      return { ...state, loadingPay: false, successPay: true };
    case "PAY_FAIL":
      return { ...state, loadingPay: false };
    case "PAY_RESET":
      return { ...state, loadingPay: false, successPay: false };

    default:
      return state;
  }
}

function Payment() {
  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // User is now connected to MetaMask.
        // You can add additional logic or redirect them to a wallet-specific page.
      } else {
        console.error("MetaMask not detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error("MetaMask connection error:", error);
    }
  };
  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });
  //   const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
        toast.success("Order is paid");
      } catch (err) {
        dispatch({ type: "PAY_FAIL", payload: err });
        toast.error(err);
      }
    });
  }
  function onError(err) {
    toast.error(err);
  }
  return (
    <div>
      <h1 style={{ color: "darkblue", textAlign: "center", marginTop: "4rem" }}>
        Connect wallet account for a new deal
      </h1>
      <Card style={{ margin: "4rem" }}>
        <CardHeader style={{ color: "green" }}>
          Connect to the your wallect to start a secure connection, and sharing
          of funds and data
        </CardHeader>
        <Card.Body>
          <p>
            To connect to your wallet to start a secure transaction you need to
            have a metamask, <span>wallet to connect to blockchain</span>
          </p>
          <p>
            If you are not familiar with blockchain contact owner for
            clarfication contact owner
          </p>
          <CardFooter>
            <Button onClick={connectToMetaMask}>Connect wallet</Button>
          </CardFooter>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Payment;
