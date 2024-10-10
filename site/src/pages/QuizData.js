

// TODO
export const QUIZ_DATA = [{
  id: "start",
  question: "Is your organisation public/government, private or an NGO?",
  options: [
    {
      value: 'Public',
      id: 'public.start'
    },
    {
      value: 'Private',
      id: 'private.start'
    },
    {
      value: 'NGO',
      id: 'ngo.start'
    }
  ],
  /* public */
}, {
  id: 'public.start',
  question: 'Do you own your own office space and are free to make internal changes?',
  options: [
    {
      value: 'Yes',
      id: 'public.2'
    },
    {
      value: 'No',
      id: 'public.1'
    }
  ]
}, {
  id: 'public.1',
  question: 'When purchasing work equipment and peripherals, is energy efficiency a consideration?',
  options: [
    {
      value: 'Yes',
      result: 'It is overlooked in the business sector how much our software choices can impact our energy use. For example, artificial intelligence packages have been gaining traction of late, however, the energy used to run data centres large enough to sustain these AI technologies is immense. Your business should prioritise a transition to Cloud-Based services for productivity. Open software packages and server storage solutions make training streamlined and cost-efficient for the business. Likewise, cloud-based service providers such as Google and Amazon Web Services have committed for their data centres to be powered by renewable energy sources; making this an easy solution to reduce the business’ carbon footprint (Oprea et al., 2018).'
    },
    {
      value: 'No',
      result: 'Switching existing technology to eco-friendly devices and peripherals can often save expenses over time. Factors from reduced energy consumption and potential tax benefits from reduced energy consumption can lead to financial advantages. Low-power and standby energy saving of new household technology manufactured after 2013 must be implemented under EU Law. This is modelled to save up to 9.3 to 12.1 billion Euros in 2025 from the energy reduction—likewise, an annual avoidance of CO2 emissions of up to 10.7 MT (Patrao et al. (2017). Monitor office space for technology manufactured before this point and consider upgrading to eco-friendly solutions.'
    }
  ]
}, {
  id: 'public.2',
  question: 'Has your office been updated to the light-emitting diode (LED) standard?',
  options: [
    {
      value: 'Yes',
      result: 'It is important to know what area of your business is using the most energy, so we can continue to reduce these. Smart meters and automated systems to identify energy efficiencies can greatly reduce energy consumption. The real-time usage of smart meters in Northern Ireland since 2002 has been associated with a decline in energy consumption of 11-17 % (Gans et al., 2013). Smart meter solutions can provide online audits of wasted energy in the workplace. A financial benefit is found by reducing this, improving the business’ carbon footprint.'
    },
    {
      value: 'No',
      result: 'By 2032, an estimated 80 % of the lighting market will be covered by LED technology. In this timeframe, the price of LED lighting is expected to halve while its luminous energy efficiency is expected to double (Gentile, 2022). Energy bills of office spaces have been shown to decrease significantly compared to old halogen light solutions, which are very inefficient, as up to 90 % of their energy is lost as heat.  Likewise, LED bulbs have been shown to last much longer, up to 10 years on average. For energy-saving solutions in the workplace, the transition to this technology is one of the most widely adopted today.'
    }
  ]
  /* private */
},{
    id: 'private.start',
    question: 'Do your employees Work from Home?',
    options: [
      {
        value: 'Yes',
        id: 'private.2'
      },
      {
        value: 'No',
        id: 'private.1'
      }
    ]
  }, {
    id: 'private.1',
    question: 'Has your business set up incentives for clean commuting? Examples include Bike Racks and electric Car Chargers.',
    options: [
      {
        value: 'Yes',
        result: 'Explore your local council and government grants and incentives to improve your current infrastructure. Recent grants to improve energy efficiency from the UK Green Investment Bank are up to £63 Million to be spread amongst local councils (Tingey and Webb, 2020). Likewise, incentives from private capital investments have increased in recent years as a means of decarbonising energy supply. Increasing existing infrastructure in the workplace can encourage employees to make the switch to clean transport.'
      },
      {
        value: 'No',
        result: 'The electric vehicle (EV) market in the UK has increased rapidly in recent years, equating to around 16 % of new car sales in 2023. However, a recent study finds that adopters of electric vehicles are concerned with charging point availability (Budnitz, 2024). Car owners without private driveways and limited public electric charger infrastructure have been shown as a deterrent to a switch to EVs. Chargers in the workplace can be a great incentive to purchase an electric vehicle. Promoting a culture of sustainability in the workplace starts with the employees. By implementing these changes, it can help in our goal of switching to clean energy.'
      }
    ]
  }, {
    id: 'private.2',
    question: 'Have you set up incentives for employees to improve their sustainability at home?',
    options: [
      {
        value: 'Yes',
        result: 'Education and feedback from existing practices can be as beneficial as a physical action to improve energy sustainability. Encourage employees not to leave work devices idle, as it can waste vital energy. As widespread hybrid work is a new concept, the correct way to transition to green working from home conditions is underdeveloped. In this case, we would encourage the business to experiment with sustainability practices that can be adopted by employees. Take on feedback and adapt it to fit your business’ needs. Whether this is a simple transition to paperless communication or to entirely virtual meetings and seminars.'
      },
      {
        value: 'No',
        result: "A seismic shift in remote working since the Covid-19 pandemic has seen increased financial benefits for businesses. In the UK, reduced overhead costs from remote work equates to a saving of up to £1,500 per employee (Keogh-Brown et al., 2020). With the saved overhead costs and the reduction of employees' carbon footprint, incentives should be offered to switch to clean energy in the home. Residential solar panel usage is increasing; however, the initial cost is a deterrent for many. Rewarding employees for their sustainability practices can improve morale."
      }
    ]
  },
    /* ngo */
    {
      id: 'ngo.start',
      question: 'Does your organisation have unused space?',
      options: [
        {
          value: 'Yes',
          id: 'ngo.2'
        },
        {
          value: 'No',
          id: 'ngo.1'
        }
      ]
    }, {
      id: 'ngo.1',
      question: 'Does any of your electricity currently come from renewable sources?',
      options: [
        {
          value: 'Yes',
          result: 'Buildings consume around 40 % of global energy use, equating to around 30 % of global CO2 emissions (Biswas et al., 2019). Most of these emissions are from thermal comfort in buildings. For this reason, your office space should be upgraded to the best insulation practices. Enhanced insulation can reduce heating, saving a lot of energy. Retrofitting existing buildings is a big opportunity for energy saving due to most of the building stock having poor energy efficiency. This is exacerbated in office spaces due to an excess of windows that can exceed a lot of lost energy. This practice prepares your office space year-round, vastly reducing your carbon footprint.'
        },
        {
          value: 'No',
          result: 'The transition to renewable energy sources is still underdeveloped within the business sector. With the current infrastructure, it is unrealistic to state that your business should be developed using entirely renewable energy sources. However, a transition to clean energy has seen several benefits associated with the business. Optimal heat pump transition has resulted in a maximum cost saving of up to 33 % and an emissions saving of up to 75 % in comparison to conventional heat sources (Lygnerud et al., 2021).  For this reason, this has been one of the most popular renewable heating solutions in the business sector. Set your business with realistic milestones and timelines to transition to a degree of renewable energy use.'
        }
      ]
    }, {
      id: 'ngo.2',
      question: 'Is this unused land comprised of tarmac or grassland?',
      options: [
        {
          value: 'Yes',
          result: 'We understand that wasted space is a certainty in office spaces from car parks to peripheral land. However, office rooftops should be considered as a great place to install solar panel solutions for clean energy solutions. Within an 18-month return period, office buildings with roof-mounted solar panels experienced a decrease in energy usage by 18 % (Mirjalili et al., 2023). Likewise, the efficiency of solar panels can decrease by as much as 40 % without proper maintenance and cleaning (Anber and Aboshosha, 2024). Having a space that is easily accessed, such as a roof space, is vital to ensure viability within the business. Solutions such as solar panels will become more widespread as the technology improves, but adopting clean energy usage early can vastly decrease your business’ carbon footprint.'
        },
        {
          value: 'No',
          result: 'Large engineering projects to sequester CO2 from the atmosphere may be more efficient. These are very unattainable for businesses. However, nature-based solutions such as tree planting can have a huge impact on your business’ carbon reduction. As of 2019, atmospheric CO2 reached a level of 417.7 ppm (Liu and Ma, 2020). Through the planting of trees, the carbon sequester rate has been up to 0.80 tonnes (Hectare/Year) (Jo et al., 2023). Trees also offer additional benefits to the business, including reduced air pollution and noise reduction. Vast energy use is a necessity for every business, however, regreening of our urban spaces can be an achievable step toward our clean energy goal.'
        }
      ]
}];