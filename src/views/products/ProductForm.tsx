// import "./AccountPage.scss";
import * as _ from "lodash";
import { useState } from "react";
import { Form as BForm } from "react-bootstrap";
import { Form } from "../../components/Form";
import FormInputGroup, {
  DEFAULT_VALID_FEEDBACK,
} from "../../components/FormInputGroup";
import { Model } from "../../models";
import { RestService } from "../../services/RestService";

export namespace ProductForm {
  // eslint-disable-next-line no-unused-vars
  export const FORM_ID = "product-form";

  const defaultValue = {
    uid: "product-" + Date.now(),
    category: {
      name: "unknow",
      uid: "unknow",
    },
    imageUrl: "",
    name: "",
    owner: RestService.currentAccount,
    quantity: 1,
    description: "",
  };

  // eslint-disable-next-line no-unused-vars
  export type OnSaveFunction = (value: Model.Product) => void;

  type Props = {
    product?: Model.Product; // if exists => update product
    onSave: OnSaveFunction;
  };

  export function Component({ product = defaultValue, onSave }: Props) {
    const CATEGORY_ID = "product-category";
    const PRODUCT_ID = "product-name";
    const PRODUCT_QUANTITY = "product-quantity";
    const PRODUCT_DESCRIPTION = "product-description";

    const [current, setCurrent] = useState<Model.Product>(product);

    function onSubmit(): void {
      onSave(current);
    }

    return (
      <Form id={FORM_ID} onSubmit={onSubmit}>
        {/* product name */}
        <FormInputGroup
          id={PRODUCT_ID}
          label="Name"
          name={PRODUCT_ID}
          type="text"
          placeholder="What is his name please ?"
          required
          regexp="^[\w\W]{2,200}$"
          value={current.name}
          onInputChange={(value) => {
            const newVersion = _.cloneDeep(current) as Model.Product;
            newVersion.name = value;
            setCurrent(newVersion);
          }}
          //TODO invalidFeedBack={}
          //TODO validityChecker={}
        />

        {/* product category */}
        <div className="form-item">
          <label htmlFor={CATEGORY_ID} className="form-label">
            Category
          </label>
          <BForm.Select
            id={CATEGORY_ID}
            aria-label="Default select example"
            required
            name={CATEGORY_ID}
            value={current.category.uid}
            onChange={(e) => {
              const uid = e.target.value;
              const newVersion = _.cloneDeep(current) as Model.Product;
              const foundCategory = RestService.getCategory(uid);
              if (!foundCategory) throw Error("Category not found.");
              newVersion.category = foundCategory;
              setCurrent(newVersion);
            }}
          >
            <option value="">Please select a category</option>
            {RestService.categories.map((c, i) => (
              <option key={i + c.uid} value={c.uid}>
                {c.name}
              </option>
            ))}
          </BForm.Select>
          <div className="valid-feedback">{DEFAULT_VALID_FEEDBACK}</div>
          <div className="invalid-feedback">Please select a category.</div>
        </div>

        {/* product quantity */}
        <FormInputGroup
          id={PRODUCT_QUANTITY}
          label="Quantity"
          name={PRODUCT_QUANTITY}
          type="text"
          placeholder="How many you can sell ?"
          required
          regexp="[1-9][0-9]{0,6}" // 1 to 9.999.999
          value={current.quantity.toString()}
          //TODO invalidFeedBack={}
          //TODO validityChecker={}
          onInputChange={(value) => {
            const newVersion = _.cloneDeep(current) as Model.Product;
            newVersion.quantity = parseInt(value);
            setCurrent(newVersion);
          }}
        />

        {/* description */}
        <div className="form-item">
          <BForm.Label>Description</BForm.Label>
          <textarea
            className="form-control"
            id={PRODUCT_DESCRIPTION}
            name={PRODUCT_DESCRIPTION}
            placeholder="What do you sell ?"
            rows={3}
            required
            value={current.description}
            onChange={(e) => {
              const newVersion = _.cloneDeep(current) as Model.Product;
              newVersion.description = e.target.value;
              setCurrent(newVersion);
            }}
          ></textarea>
          <div className="valid-feedback">{DEFAULT_VALID_FEEDBACK}</div>
          <div className="invalid-feedback">Please enter a description.</div>
        </div>
      </Form>
    );
  }
}
