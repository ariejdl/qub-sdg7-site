import { useEffect, useState } from "react";
import "./EnergyTypes.css";

/* can delete when finished */
export const EnergyTypesPage = () => {
  // https://jsfiddle.net/juanjus98/b5vAQ/

  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    document.querySelectorAll(".flip").forEach((el, i) => {
      el.addEventListener("click", () => {
        setFlipped(i);
      });
      // $(this).find(".card").toggleClass("flipped");
    });
  }, []);

  return (
    <div>
      <h1 className="heading anim-in">Energy Types</h1>

      <p>
        <strong>Click a card to learn more:</strong>
      </p>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Fossil</th>
            <th style={{ width: "50%" }}>Renewable</th>
          </tr>
        </thead>
      </table>

      <div className="parent">
        <div className="div1">

          <div className="flip">
            <div className={"card " + ((flipped === 0) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/coal.jpg)' }}>Coal</div>
              <div className="face back">
                <p>As a society, we have a lot to owe to coal. Modern society was built from the Industrial Revolution in the late 18th Century, and this was largely possible due to the abundance of coal deposits throughout Europe that were burned for energy to power these large machines. However, unbeknownst at the time, this marked a period of history that exacerbated the climate crisis we face today. The Greenhouse Gases produced from coal fires are a vital contributor to the greenhouse effect. Global energy-related CO2 emissions reached 33.28 billion tonnes in 2019, with coal the largest contributor, accounting for 40.1 % <sup>1</sup>. The largest global economic powers still heavily rely on coal burning for energy <sup>2</sup>. China’s main source of energy is still from coal sources, contributing to 56.6 % of its energy supply. China is also the greatest emitter of Greenhouse Gases, accounting for 23.6 % of the global total <sup>3</sup>. While renewable energy sources are much more expensive than traditional fossil sources, large economic powers must transition to these if we want to limit the rate of global warming for future generations. To find out more about renewable energies, please see below.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="div2">

         <div className="flip">
            <div className={"card " + ((flipped === 1) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/wind.jpg)' }}>Wind</div>
              <div className="face back">
                <p>As of 2019, 743 gigawatts (GW) of wind power capacity were installed worldwide from both land-based and offshore wind turbines <sup>14</sup>. The first industrial installation of offshore wind turbines was in 1991, and since then, the cumulative installed capacity of global offshore energy has reached more than 29.1 GW worldwide <sup>15</sup>. This is a particularly invested energy solution as turbine sizes continue to increase and new technologies begin to emerge, allowing for these farms to be installed in deeper waters, further from shore <sup>16</sup>. As of 2016, the USA currently has the highest total wind capacity of around 82,000 megawatts. However, this only equates to around 5.6 % of their energy demand. In contrast, Portugal had a capacity of around 5,300 megawatts, equating to 24.0 % of their energy demand <sup>17</sup>. Wind farms currently face major obstacles relating to environmental issues. For offshore turbines, issues such as collision risk of volant species and displacement of marine ecosystems have been vocal from activist groups, making more nations dubious to invest heavily in this technology <sup>18</sup>. However, while it is important to raise these concerns, it should be noted that without proper transition to these green energy solutions, the rate of habitat destruction and ecosystem collapse will be much higher than any clean technology could achieve. It is these concerns that are reducing renewable energy generation worldwide through project delays or abandonment <sup>19</sup>.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="div3">
           <div className="flip">
            <div className={"card " + ((flipped === 2) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/oil.jpg)' }}>Oil</div>
              <div className="face back">
                  <p>One reason that nations may transition away from traditional energy sources is if this source starts to rise in price. Oil reserves and oil trading are massive industries in global economic activity. </p>
                  <p>A key figure from Barrales-Ruiz and Neudörfer (2024) <sup>4</sup> suggests that the change in crude oil price invariably affects global CO2 emissions. This further reflects how economic growth can translate into environmental impact <sup>5</sup>. Oil is the second largest contributor to CO2 emissions, accounting for 11.84 billion tonnes <sup>6</sup>. Global policy to limit crude oil burning and combat global warming includes carbon pricing through taxes for usage. Likewise, subsidies for nations to implement green energy usage <sup>7</sup>. Scholars do see success for the crude oil market to decrease in the future largely due to electric vehicles set to replace traditional fuel vehicles <sup>8</sup>. However, we are well off our target of clean energy sources to power consumer vehicles which will be vital in our strive for access to clean energy for all. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="div4">
           <div className="flip">
            <div className={"card " + ((flipped === 3) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/pv.jpg)' }}>Solar</div>
              <div className="face back">
                <p>Solar energy can be adopted both in large-scale commercial facilities and serving the energy needs of individual households <sup>26</sup>. This technology has become one of the leading renewable energy sources due to increased efficiency and decreasing prices. However, in certain countries, its growth is far lower as it is particularly disruptive from weather conditions. The UK was seen as an early pioneer of solar technology, now accounting for around 80 % of community energy projects in England <sup>27</sup>. In the business sector, solar power is particularly attractive due to private rooftop adopters. It has been linked to private benefits such as long-term energy bill savings. This technology is primarily used in the household, with around 3.2 million households in the U.S. powered by solar <sup>28</sup>. However, the same benefits can be realised in a business setting. Financially, businesses with solar adoption have been shown to increase in property value. This energy source should be adopted more widely as an important role in meeting energy needs sustainably.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div5">
           <div className="flip">
            <div className={"card " + ((flipped === 4) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/gas.jpg)' }}>Natural Gas</div>
              <div className="face back">
                <p>Methane emissions significantly influence present global warming. While it often takes a backseat to CO2 in discussions, these emissions equate to around a quarter of global warming potential <sup>9</sup>. The natural gas industry is one of the main contributors to methane emissions. This is also a rapidly growing sector. For example, methane emissions in China grew from 2037.72 Gg in 2012 to 3939.94 Gg in 2021 <sup>10</sup>. While less abundant in the atmosphere, at around 355.80 million tonnes in 2021 <sup>11</sup>, methane is much more potent than other Greenhouse Gases. If Methane had the same concentration of CO2 over the last 20 years, global warming potential could be up to 84 times higher than present <sup>12</sup>. Natural gas does produce less pollution than other fossil fuels during the combustion process, so it is often looked at as an enabler of the low-carbon energy transition <sup>13</sup>. Due to how much methane emissions are overlooked in these figures, it may be unsustainable to continue to use this energy source.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div6">
           <div className="flip">
            <div className={"card " + ((flipped === 5) ? "flipped": "") }>
              <div className="face front heading" style={{ backgroundImage: 'url(pages/energy-types/h2.jpg)' }}>Hydrogen</div>
              <div className="face back">
                <p>For a global transition to a net-zero energy target, a key part of this will likely be in the widespread availability of hydrogen. This technology has a multitude of benefits. Its combustion yields only water vapour, with its high energy density meaning it is a viable solution for many sectors <sup>20</sup>. For example, in the power sector, it can be used as a long-term energy storage. For transport, it can be used directly to power vehicles from the consumer car to large shipping vessels <sup>21</sup>. However, in contrast to other low-carbon energy systems, this technology remains very expensive to implement. This is largely due to the limited use in the transport sector <sup>22</sup>. Furthermore, a cost-efficient pathway for hydrogen transport has not been agreed upon, with the main methods being compressed or liquefied hydrogen using trucks and ships <sup>23</sup>. This technology may be perfectly aligned with STG 7, as it offers an avenue to bolster energy storage, enhance grid stability and minimise the carbon emissions of energy usage <sup>24</sup>. Approximately 70 million tonnes of hydrogen are produced annually, primarily for oil refining and fertiliser production <sup>25</sup>. If more of this can be used for consumer habits, such as for hydrogen trucks and cars, it will become more readily available and cost-efficient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <ul className="unstyled references">
      <li>[1] Chen, C., Xu, R., Tong, D., Qin, X., Cheng, J., Liu, J., Zheng, B., Yan, L. and Zhang, Q. (2022) A striking growth of CO2 emissions from the global cement industry driven by new facilities in emerging countries. Environmental Research Letters, 17(4): 44-107 10.1088/1748-9326/ac48b5</li>

<li>[2] Yan, W., Liu, B., He, J., Liang, H., Zhang, Z., Yuan, X., Liu, X. and Wang, Y. (2023) October. Real-Time Carbon Emission Monitoring System for Coal-Fired Power Plants. In International Conference on Wireless Power Transfer (pp. 456-462). Singapore: Springer Nature Singapore. https://doi.org/10.1007/978-981-97-0865-9_49</li>
  
<li>[3] Kao, X., Liu, Y., Wang, W., Wen, Q. and Zhang, P. (2024) The pressure of coal consumption on China's carbon dioxide emissions: A spatial and temporal perspective. Atmospheric Pollution Research, 15(8): 102-188 https://doi.org/10.1016/j.apr.2024.102188</li>
  
<li>[4] Barrales-Ruiz, J. and Neudörfer, P. (2024) The oil price (Ir) relevance for global CO2 emissions. Energy Reports, 11(1): 3016-3021 https://doi.org/10.1016/j.egyr.2024.02.044</li>
  
<li>[5] Wang, X., Liu, B., He, S., Yuan, H., Ji, D., Qi, L., Song, Y. and Xu, W. (2024) An Analytic Hierarchy Process Method to Evaluate Environmental Impacts of In Situ Oil Shale Mining. Sustainability, 16(4): 13-63 https://doi.org/10.3390/su16041363</li>
  
<li>[6] Herwartz, H., Theilen, B. and Wang, S. (2024) Unraveling the structural sources of oil production and their impact on CO2 emissions. Energy Economics, 13(2): 107-488 https://doi.org/10.1016/j.eneco.2024.107488</li>
  
<li>[7] Deheri, A. and Carmel, S. (2024) Do fluctuations in global crude oil prices have an asymmetric effect on oil product pricing in India?. Economic Change and Restructuring, 57(1): 17 https://doi.org/10.1007/s10644-024-09599-9</li>
  
<li>[8] Gong, X. and Jia, G.Z. (2024) Exploring the Cross-Correlations between Tesla Stock Price, New Energy Vehicles and Oil Prices: A Multifractal and Causality Analysis. Fluctuation and Noise Letters, 2(6): 24-124 https://doi.org/10.1142/S021947752450024X</li>
  
<li>[9] Cao, M., Wang, F., Ma, S., Geng, H. and Sun, K. (2024) Recent advances on greenhouse gas emissions from wetlands: mechanism, global warming potential, and environmental drivers. Environmental Pollution, 12(4): 200-204 https://doi.org/10.1016/j.envpol.2024.124204</li>
  
<li>[10] Li, N., Wang, J., Liu, R., Huang, H., Willerström, J. and Höök, M. (2024) Methane emissions from the natural gas industry in China–A systematically accounting based on the bottom-up approach. Gas Science and Engineering, 12(6): 205-346 https://doi.org/10.1016/j.jgsce.2024.205346</li>
  
<li>[11] Resplandy, L., Hogikyan, A., Müller, J.D., Najjar, R.G., Bange, H.W., Bianchi, D., Weber, T., Cai, W.J., Doney, S.C., Fennel, K. and Gehlen, M. (2024) A synthesis of global coastal ocean greenhouse gas fluxes. Global biogeochemical cycles, 38(1): 78-103. https://doi.org/10.1029/2023GB007803</li>
  
<li>[12] Rowland, S.T., Lebel, E.D., Goldman, J.S., Domen, J.K., Bilsback, K.R., Ruiz, A., Jaeger, J.M., Hill, L.A.L., Kashtan, Y.S., Finnegan, C. and Nicholson, M. (2024) Downstream natural gas composition across US and Canada: implications for indoor methane leaks and hazardous air pollutant exposures. Environmental Research Letters, 19(6): 64-164 10.1088/1748-9326/ad416c</li>
  
<li>[13] Lauvaux, T., Giron, C., Mazzolini, M., d’Aspremont, A., Duren, R., Cusworth, D., Shindell, D. and Ciais, P. (2022) Global assessment of oil and gas methane ultra-emitters. Science, 375(6580): 557-561 DOI: 10.1126/science.abj4351</li>
  
<li>[14] IRENA (2019), Renewable Energy Statistics 2019, The International Renewable Energy Agency, Abu Dhabi. https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2019/Jul/IRENA_Renewable_energy_statistics_2019.pdf</li>
  
<li>[15] Lee, J. and Zhao, F. (2021) GWEC global wind report 2021. Global wind energy council, 15, p.16 https://gwec.net</li>
  
<li>[16] Clark, C.E., Barter, G., Shaler, K. and DuPont, B. (2022) Reliability‐based layout optimization in offshore wind energy systems. Wind Energy, 25(1), pp.125-148. https://doi.org/10.1002/we.2664</li>
  
<li>[17] Sinclair, K., Copping, A.E., May, R., Bennet, F., Warnas, M., Perron, M., Elmqvist, Å. and DeGeorge, E. (2018) Resolving environmental effects of wind energy. Wiley Interdisciplinary Reviews: Energy and Environment, 7(4): 20-91. https://doi.org/10.1002/wene.291</li>
  
<li>[18] Green, R.E., Gill, E., Hein, C., Couturier, L., Mascarenhas, M., May, R., Newell, D. and Rumes, B. (2022) International assessment of priority environmental issues for land-based and offshore wind energy development. Global sustainability, 5(1): 17 https://doi.org/10.1017/sus.2022.14</li>
  
<li>[19] Allison, T.D., Diffendorfer, J.E., Baerwald, E.F., Beston, J.A., Drake, D., Hale, A.M., Hein, C.D., Huso, M.M., Loss, S.R., Lovich, J.E. and Strickland, M.D. (2019) Impacts to wildlife of wind energy siting and operation in the United States. Issues in Ecology, 21(1): 2-18 https://tethys.pnnl.gov/sites/default/files/publications/Allison_et_al_2019.pdf</li>
  
<li>[20] Le, T.T., Sharma, P., Bora, B.J., Tran, V.D., Truong, T.H., Le, H.C. and Nguyen, P.Q.P. (2024) Fueling the future: A comprehensive review of hydrogen energy systems and their challenges. International Journal of Hydrogen Energy, 5(4): 791-816</li>
  
<li>[21] Tries, C., Hofmann, F. and Brown, T. (2022) October. Benefits from islanding hydrogen production in renewable energy systems. In 21st Wind & Solar Integration Workshop (WIW 2022) (Vol. 2022, pp. 294-301). IET 10.1109/EEM58374.2023.10161934</li>
  
<li>[22] Niermann, M., Timmerberg, S., Drünert, S. and Kaltschmitt, M. (2021) Liquid Organic Hydrogen Carriers and alternatives for international transport of renewable hydrogen. Renewable and Sustainable Energy Reviews, 13(5): 110-171 https://doi.org/10.1016/j.rser.2020.110171</li>
  
<li>[23] Moriarty, P. and Honnery, D. (2019) Prospects for hydrogen as a transport fuel. International Journal of Hydrogen Energy, 44(31): 16029-16037 https://doi.org/10.1016/j.ijhydene.2019.04.278</li>
  
<li>[24] Oyekale, J., Petrollese, M., Tola, V. and Cau, G. (2020) Impacts of renewable energy resources on effectiveness of grid-integrated systems: Succinct review of current challenges and potential solution strategies. Energies, 13(18), p.4856 https://doi.org/10.3390/en13184856</li>
  
<li>[25] Albatayneh, A., Juaidi, A., Jaradat, M. and Manzano-Agugliaro, F. (2023) Future of electric and hydrogen cars and trucks: an overview. Energies, 16(7): 3230 https://doi.org/10.3390/en16073230</li>
  
<li>[26] Wilson, C. (2018) Disruptive low-carbon innovations. Energy Research & Social Science, 3(7): 216-223 https://doi.org/10.1016/j.erss.2017.10.053</li>
  
<li>[27] Nolden, C., Barnes, J. and Nicholls, J. (2020) Community energy business model evolution: A review of solar photovoltaic developments in England. Renewable and Sustainable Energy Reviews, 12(2): 109-722 https://doi.org/10.1016/j.rser.2020.109722</li>
  
<li>[28] O'Shaughnessy, E., Forrester, S. and Barbose, G. (2023) Supply sunspots and shadows: Business siting patterns and inequitable rooftop solar adoption in the United States. Energy Research & Social Science, 9(6): 102-192 https://doi.org/10.1016/j.erss.2022.102920 </li>
      </ul>
    </div>
  );
};
