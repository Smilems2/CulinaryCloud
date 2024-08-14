{menuPlan.map((a1) =>(
    <div className="pvfood-div" key={a1.plan_id}>
      <div className="pvleft-food">
        <div className="pvicon-food _pvifd1">
          <i class="fa-solid fa-leaf"></i>
        </div>
        <div className="food-name _pvfe1">{a1.plans}</div>
        <div className="price-food _pvpf1">{a1.price}</div>
        <div className="food-desc _pvfd1">{a1.description}</div>
      </div>
      <div className="pvright-food">
        <div className="image-food _pvif1"></div>
        <div className="button-add _pvbd1">
          <button id="pvadd">ADD</button>
        </div>
      </div>
    </div>
))}