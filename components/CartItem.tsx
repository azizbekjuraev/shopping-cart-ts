import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";
type CardItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CardItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center p-2"
      style={{
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        borderRadius: "0.3rem",
      }}
    >
      <img
        src={item?.imgUrl}
        alt=""
        style={{
          width: "100px",
          height: "75px",
          objectFit: "cover",
        }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{ fontSize: "0.75rem", marginLeft: "0.2rem" }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>
        {formatCurrency(item.price * quantity)}
        <span style={{ marginLeft: ".7rem" }}>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            &times;
          </Button>
        </span>
      </div>
    </Stack>
  );
};

export default CartItem;
