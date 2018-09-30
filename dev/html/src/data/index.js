const data = {
    "questions": [
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Which of the following best describes your organisation?",
            "sectionId": 1,
            "questionId": "1a",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null,
            "setRoutingCondition": {
                "key": "ORG_TYPE",
                "defaultValue": "OTHER"
            }
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Are you answering the survey on behalf of a client, or on behalf of your agency (where your responses relate to the agency measurement of it's own content/metrics)?",
            "sectionId": 1,
            "questionId": "1a2",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null,
            "setRoutingCondition": {
                "key": "AGENCY_TARGET",
                "defaultValue": "CLIENT"
            }
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Within [~ternary~] organisation, which of the following best describes your team role?",
            "sectionId": 1,
            "questionId": "1b",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null,
            "routingRuleKeys": ["teamRoleQuestionWording"]
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Which of the following best describes the industry sector of the organisation?",
            "sectionId": 1,
            "questionId": "1c",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Which of the following best describes the type of agency you work for?",
            "sectionId": 1,
            "questionId": "1d",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Approximately how big is the organisation globally, in terms of number of employees?",
            "sectionId": 1,
            "questionId": "1e",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 2,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "In which of the following regions does the organisation have employees based?",
            "sectionId": 1,
            "questionId": "1f",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 3,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "And in which country [~ternary~] personally based?",
            "sectionId": 1,
            "questionId": "1g",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null,
            "routingRuleKeys": ["countryQuestionWording"]
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "If the organisation is international, are you answering on behalf of the region or globally?",
            "sectionId": 1,
            "questionId": "1h",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 1,
            "dimensionId": null,
            "strengthText": null,
            "actionThreshold": null,
            "actionText": null,
            "strengthThreshold": null,
            "text": "Do you give your permission for the data you submit in this questionnaire to contribute to an overall benchmark dataset.  This will only involve the aggregate findings from the M3 questionnaire from multiple responses  - detail of your specific answers will not be shared",
            "sectionId": 1,
            "questionId": "1i",
            "maxScore": null,
            "strengthOrder": null,
            "actionOrder": null
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": 0.5,
            "actionText": "More frequent evaluation of earned and editorial media channels",
            "strengthThreshold": 0.75,
            "text": "Earned and editorial media channels",
            "sectionId": 2,
            "questionId": "2a",
            "maxScore": 1,
            "strengthOrder": "R20",
            "actionOrder": "R01"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": 0.5,
            "actionText": "More frequent evaluation of owned social media channels",
            "strengthThreshold": 0.75,
            "text": "Owned social media channels",
            "sectionId": 2,
            "questionId": "2b",
            "maxScore": 1,
            "strengthOrder": "R21",
            "actionOrder": "R02"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": 0.5,
            "actionText": "More frequent evaluation of owned digital channels and web domains",
            "strengthThreshold": 0.75,
            "text": "Owned digital channels and web domains",
            "sectionId": 2,
            "questionId": "2c",
            "maxScore": 1,
            "strengthOrder": "R22",
            "actionOrder": "R03"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": 0.5,
            "actionText": "More frequent evaluation of shared social media channels",
            "strengthThreshold": 0.75,
            "text": "Shared social media channels",
            "sectionId": 2,
            "questionId": "2d",
            "maxScore": 1,
            "strengthOrder": "R23",
            "actionOrder": "R04"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": 0.5,
            "actionText": "More frequent evaluation of paid media",
            "strengthThreshold": 0.75,
            "text": "Paid media, including paid social",
            "sectionId": 2,
            "questionId": "2e",
            "maxScore": 1,
            "strengthOrder": "R24",
            "actionOrder": "R05"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 2,
            "text": "Coverage volume or  coverage highlights",
            "sectionId": 3,
            "questionId": "3a",
            "maxScore": 0,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": -0.5,
            "actionText": "Move away from the use of AVEs as a way of measuring the value of communications",
            "strengthThreshold": 2,
            "text": "Advertising value equivalents (AVE) or similar financial value",
            "sectionId": 3,
            "questionId": "3b",
            "maxScore": 0,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "Evaluation measures the quality as well as quantity of media coverage",
            "actionThreshold": 0.25,
            "actionText": "Measure the quality as well quantity of media coverage (eg sentiment, prominence or message delivery)",
            "strengthThreshold": 0.75,
            "text": "Measure the quality of coverage (such as sentiment, prominence or message delivery)",
            "sectionId": 3,
            "questionId": "3c",
            "maxScore": 1,
            "strengthOrder": "R07",
            "actionOrder": "R07"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "Evaluation tracks how coverage is reaching specific target audiences",
            "actionThreshold": 0.25,
            "actionText": "Track how coverage is reaching specific target audiences (e.g. by using media consumption data)",
            "strengthThreshold": 0.75,
            "text": "Track how coverage is reaching specific target audiences (e.g. media consumption data)",
            "sectionId": 3,
            "questionId": "3d",
            "maxScore": 1,
            "strengthOrder": "R08",
            "actionOrder": "R08"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 2,
            "text": "Volume of social media posts",
            "sectionId": 3,
            "questionId": "3e",
            "maxScore": 0,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": null,
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 2,
            "text": "Total impressions",
            "sectionId": 3,
            "questionId": "3f",
            "maxScore": 0.5,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We identify and track topics and themes on social media",
            "actionThreshold": 0.25,
            "actionText": "Identify and track topics and themes",
            "strengthThreshold": 0.75,
            "text": "Identify and track topics and themes",
            "sectionId": 3,
            "questionId": "3g",
            "maxScore": 1,
            "strengthOrder": "R09",
            "actionOrder": "R09"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We track social media engagement",
            "actionThreshold": 0.25,
            "actionText": "Track social media engagement (likes, shares, retweets etc)]",
            "strengthThreshold": 0.75,
            "text": "Track engagement (likes, shares, retweets etc) and engagement rate",
            "sectionId": 3,
            "questionId": "3h",
            "maxScore": 1,
            "strengthOrder": "R10",
            "actionOrder": "R10"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We measure cost per click",
            "actionThreshold": 0.25,
            "actionText": "Measure cost per click",
            "strengthThreshold": 0.75,
            "text": "Cost per click",
            "sectionId": 3,
            "questionId": "3i",
            "maxScore": 1,
            "strengthOrder": "R11",
            "actionOrder": "R11"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We measure click thrus and click thru rate",
            "actionThreshold": 0.25,
            "actionText": "Measure click thrus and click thru rate",
            "strengthThreshold": 0.75,
            "text": "Click thrus and click thru rate",
            "sectionId": 3,
            "questionId": "3j",
            "maxScore": 1,
            "strengthOrder": "R12",
            "actionOrder": "R12"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We track unique and total site visitors to owned channels",
            "actionThreshold": 0.25,
            "actionText": "Track unique and total site visitors to owned channels",
            "strengthThreshold": 0.75,
            "text": "Unique and total site visitors",
            "sectionId": 3,
            "questionId": "3k",
            "maxScore": 1,
            "strengthOrder": "R13",
            "actionOrder": "R13"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We track the sharing of earned media content on social media",
            "actionThreshold": 0.25,
            "actionText": "Track the sharing of earned media content on social media",
            "strengthThreshold": 0.75,
            "text": "Track the sharing of earned media content on social media",
            "sectionId": 3,
            "questionId": "3l",
            "maxScore": 1,
            "strengthOrder": "R14",
            "actionOrder": "R14"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Evaluation is used to set KPI benchmarks",
            "actionThreshold": 0.25,
            "actionText": "Use evaluation to set KPI benchmarks",
            "strengthThreshold": 0.75,
            "text": "Use evaluation to set KPI benchmarks",
            "sectionId": 4,
            "questionId": "4a",
            "maxScore": 1,
            "strengthOrder": "P01",
            "actionOrder": "P01"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Review performance and recalibrate the organisation goals and objectives",
            "actionThreshold": 0.25,
            "actionText": "Review performance and recalibrate the organisation goals and objectives as necessary",
            "strengthThreshold": 0.75,
            "text": "Review performance and recalibrate the organisation goals and objectives as necessary",
            "sectionId": 4,
            "questionId": "4b",
            "maxScore": 1,
            "strengthOrder": "P02",
            "actionOrder": "P02"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Evaluation reporting is used to adjust strategy and execution",
            "actionThreshold": 0.25,
            "actionText": "Adjust strategy and execution based on evaluation reporting",
            "strengthThreshold": 0.75,
            "text": "Adjust our strategy and execution based on evaluation reporting",
            "sectionId": 4,
            "questionId": "4c",
            "maxScore": 1,
            "strengthOrder": "P03",
            "actionOrder": "P03"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "PR and communications evaluation are fed into an overall performance report for the whole organisation",
            "actionThreshold": 0.25,
            "actionText": "Feed PR and communications evaluation into an overall performance report for the whole organisation",
            "strengthThreshold": 0.75,
            "text": "Feed PR and communications evaluation into an overall performance report for the whole organisation",
            "sectionId": 4,
            "questionId": "4d",
            "maxScore": 1,
            "strengthOrder": "I01",
            "actionOrder": "I01"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": null,
            "actionThreshold": 0.25,
            "actionText": "Move beyond using measurement and evaluation purely as a reporting mechanism",
            "strengthThreshold": 2,
            "text": "Use measurement and evaluation purely as a reporting mechanism",
            "sectionId": 5,
            "questionId": "5a",
            "maxScore": 1,
            "strengthOrder": "P04",
            "actionOrder": "P04"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to provide insight for planning",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to provide insight for planning",
            "strengthThreshold": 0.75,
            "text": "Use measurement and evaluation to provide insight for planning",
            "sectionId": 5,
            "questionId": "5b",
            "maxScore": 1,
            "strengthOrder": "P05",
            "actionOrder": "P05"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to better understand stakeholder audiences",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to better understand stakeholder audiences",
            "strengthThreshold": 0.75,
            "text": "Use measurement and evaluation to better understand the organisational stakeholder audiences",
            "sectionId": 5,
            "questionId": "5c",
            "maxScore": 1,
            "strengthOrder": "P06",
            "actionOrder": "P06"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to prioritise and target the right media to achieve the organisation's communication goals",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to prioritise and target the right media to achieve the organisation's communication goals",
            "strengthThreshold": 0.75,
            "text": "Measurement and evaluation helps us prioritise and target the right media to achieve the organisation's communication goals",
            "sectionId": 5,
            "questionId": "5d",
            "maxScore": 1,
            "strengthOrder": "P07",
            "actionOrder": "P07"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to identify and track the right messaging",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to identify and use the right messaging",
            "strengthThreshold": 0.75,
            "text": "Use measurement and evaluation to identify and use the right messaging",
            "sectionId": 5,
            "questionId": "5e",
            "maxScore": 1,
            "strengthOrder": "P08",
            "actionOrder": "P08"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to track performance relative to the organisation\u2019s communication goals",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to track performance relative to the organisation\u2019s communication goals",
            "strengthThreshold": 0.75,
            "text": "Use measurement and evaluation to track performance relative to the organisation\u2019s communication goals",
            "sectionId": 5,
            "questionId": "5f",
            "maxScore": 1,
            "strengthOrder": "P09",
            "actionOrder": "P09"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Measurement and evaluation is used to adjust strategy and make execution more effective",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to adjust strategy and make execution more effective",
            "strengthThreshold": 0.75,
            "text": "Measurement and evaluation is used to adjust our strategy and make execution more effective",
            "sectionId": 5,
            "questionId": "5g",
            "maxScore": 1,
            "strengthOrder": "I02",
            "actionOrder": "I02"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "Measurement and evaluation is used to find points of differentiation versus competitors",
            "actionThreshold": 0.25,
            "actionText": "Use measurement and evaluation to find points of differentiation versus competitors",
            "strengthThreshold": 0.75,
            "text": "Measurement and evaluation is used to find points of differentiation versus competitors",
            "sectionId": 5,
            "questionId": "5h",
            "maxScore": 1,
            "strengthOrder": "P10",
            "actionOrder": "P10"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Results from communications evaluation contribute to regular reporting of overall performance of the organisation",
            "actionThreshold": 0.25,
            "actionText": "Use  results from communications evaluation to  contribute to regular reporting of overall performance of the organisation",
            "strengthThreshold": 0.75,
            "text": "Results from communications evaluation are included within/contribute to regular reporting of overall performance of the organisation",
            "sectionId": 5,
            "questionId": "5i",
            "maxScore": 1,
            "strengthOrder": "I03",
            "actionOrder": "I03"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "We run focus-groups or other qualitative research activity to better understand audiences",
            "actionThreshold": 0.25,
            "actionText": "Run focus-groups or other qualitative research activity to better understand audiences",
            "strengthThreshold": 0.75,
            "text": "Run focus-groups or other qualitative research activity to better understand audiences",
            "sectionId": 6,
            "questionId": "6a",
            "maxScore": 1,
            "strengthOrder": "P11",
            "actionOrder": "P11"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We run quantitative surveys to understand changes in audience awareness and perception",
            "actionThreshold": 0.25,
            "actionText": "Run quantitative surveys to understand changes in audience awareness and perception",
            "strengthThreshold": 0.75,
            "text": "Run quantitative surveys to understand changes in audience awareness and perception",
            "sectionId": 6,
            "questionId": "6b",
            "maxScore": 1,
            "strengthOrder": "R15",
            "actionOrder": "R15"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We track comments and engagement on social media channels",
            "actionThreshold": 0.25,
            "actionText": "Track comments and engagement on social media channels",
            "strengthThreshold": 0.75,
            "text": "Track comments and engagement on social media channels",
            "sectionId": 6,
            "questionId": "6c",
            "maxScore": 1,
            "strengthOrder": "R16",
            "actionOrder": "R16"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We track engagement on owned channels",
            "actionThreshold": 0.25,
            "actionText": "Track engagement on owned channels (e.g. website visitors, blog comments)",
            "strengthThreshold": 0.75,
            "text": "Track engagement on owned channels (e.g. website visitors, blog comments)",
            "sectionId": 6,
            "questionId": "6d",
            "maxScore": 1,
            "strengthOrder": "R17",
            "actionOrder": "R17"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We look at behavioural changes within target audiences to determine the impact of organisational activity",
            "actionThreshold": 0.25,
            "actionText": "Look at behavioural changes within target audiences to determine the impact of organisational activity",
            "strengthThreshold": 0.75,
            "text": "Look at behavioural changes within target audiences to determine the impact of organisational activity",
            "sectionId": 6,
            "questionId": "6e",
            "maxScore": 1,
            "strengthOrder": "R18",
            "actionOrder": "R18"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": null,
            "actionThreshold": -1,
            "actionText": null,
            "strengthThreshold": 2,
            "text": "Look for examples were activity has resulted in an increase in organisational outcomes",
            "sectionId": 7,
            "questionId": "7a",
            "maxScore": 0.5,
            "strengthOrder": "I04",
            "actionOrder": "I04"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "We quantify correlations between activity metrics and organisation outcomes metrics",
            "actionThreshold": 0.5,
            "actionText": "Quantify correlations between activity metrics and organisation outcomes metrics",
            "strengthThreshold": 0.75,
            "text": "Quantify correlations between activity metrics and organisation outcomes metrics",
            "sectionId": 7,
            "questionId": "7b",
            "maxScore": 1,
            "strengthOrder": "P12",
            "actionOrder": "P12"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "We track how audiences experience coverage and their subsequent behaviour",
            "actionThreshold": 0.5,
            "actionText": "Track how audiences experience coverage and their subsequent behaviour (for example tracking online journeys using Google Analytics or similar software)",
            "strengthThreshold": 0.75,
            "text": "Track how audiences experience coverage and their subsequent behaviour (for example tracking online journeys using Google Analytics or similar software)",
            "sectionId": 7,
            "questionId": "7c",
            "maxScore": 1,
            "strengthOrder": "P13",
            "actionOrder": "P13"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "PR evaluation data contributes to market-mix analysis to understand how different marketing channels influence organisation outcomes",
            "actionThreshold": 0.5,
            "actionText": "Use market-mix analysis to understand how marketing channels influence organisation outcomes (e.g. econometric modelling)",
            "strengthThreshold": 0.75,
            "text": "Contribute PR evaluation data to market-mix analysis to understand how different marketing channels influence organisation outcomes (e.g. econometric modelling)",
            "sectionId": 7,
            "questionId": "7d",
            "maxScore": 1,
            "strengthOrder": "P14",
            "actionOrder": "P14"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "PR performance is linked to the organisation\u2019s reputation and how this impacts on the strategic organisational objectives",
            "actionThreshold": 0.5,
            "actionText": "Link PR performance to the organisation\u2019s reputation and how this impacts on the strategic organisational objectives",
            "strengthThreshold": 0.75,
            "text": "Linking PR performance to the organisation\u2019s reputation and how this impacts on the strategic organisational objectives",
            "sectionId": 7,
            "questionId": "7e",
            "maxScore": 1,
            "strengthOrder": "I05",
            "actionOrder": "I05"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "There is a clear vision and goals for the organisation which all employees are committed to",
            "actionThreshold": 0.25,
            "actionText": "Establish clear vision and goals for the organisation which all employees are committed to",
            "strengthThreshold": 0.5,
            "text": "The organisation has a clear vision and goals which all employees are committed to",
            "sectionId": 8,
            "questionId": "8a",
            "maxScore": 1,
            "strengthOrder": "I06",
            "actionOrder": "I06"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Clear strategic organisational objectives have been defined",
            "actionThreshold": 0.25,
            "actionText": "Define clear strategic organisational objectives",
            "strengthThreshold": 0.5,
            "text": "The organisation has well defined strategic objectives",
            "sectionId": 8,
            "questionId": "8b",
            "maxScore": 1,
            "strengthOrder": "I07",
            "actionOrder": "I07"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Organisation objectives have been translated into specific team and individual objectives",
            "actionThreshold": 0.25,
            "actionText": "Translate organisation objectives into specific team and individual objectives",
            "strengthThreshold": 0.5,
            "text": "The organisation objectives are translated into specific team and individual objectives",
            "sectionId": 8,
            "questionId": "8c",
            "maxScore": 1,
            "strengthOrder": "I08",
            "actionOrder": "I08"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": null,
            "actionThreshold": -1,
            "actionText": null,
            "strengthThreshold": 2,
            "text": "While the communications evaluation program is effective, other parts of the organisation do not have a strong evaluation program",
            "sectionId": 8,
            "questionId": "8d",
            "maxScore": 0,
            "strengthOrder": "I99",
            "actionOrder": "I99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Performance is based on the contribution made to the organisation objectives",
            "actionThreshold": 0.25,
            "actionText": "Define performance based on the contribution made to the organisation objectives",
            "strengthThreshold": 0.5,
            "text": "Individual performance is assessed based on the contribution made to the organisation objectives",
            "sectionId": 8,
            "questionId": "8e",
            "maxScore": 1,
            "strengthOrder": "I09",
            "actionOrder": "I09"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "There is a culture of accountability across the organisation",
            "actionThreshold": 0.25,
            "actionText": "Work to build a culture of accountability across the organisation",
            "strengthThreshold": 0.5,
            "text": "The organisation has a culture of accountability",
            "sectionId": 8,
            "questionId": "8f",
            "maxScore": 1,
            "strengthOrder": "I10",
            "actionOrder": "I10"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Experimentation is encouraged as part of a culture of learning",
            "actionThreshold": 0.25,
            "actionText": "Allow for experimentation as part of a culture of learning",
            "strengthThreshold": 0.5,
            "text": "It is acceptable for a project to fail within the organisation",
            "sectionId": 8,
            "questionId": "8g",
            "maxScore": 1,
            "strengthOrder": "I11",
            "actionOrder": "I11"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Teams have buy-in to performance metrics which they are expected to achieve",
            "actionThreshold": 0.25,
            "actionText": "Ensure that teams have buy-in to performance metrics which they are expected to achieve",
            "strengthThreshold": 0.5,
            "text": "All teams within the organisation sign up to performance metrics which they are expected to achieve",
            "sectionId": 8,
            "questionId": "8h",
            "maxScore": 1,
            "strengthOrder": "I12",
            "actionOrder": "I12"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "Multiple metrics across the organisation are linked together to get a 'whole picture' view of performance",
            "actionThreshold": 0.25,
            "actionText": "Link multiple metrics across the organisation to get a 'whole picture' view of performance",
            "strengthThreshold": 0.5,
            "text": "Multiple metrics are linked across the organisation to get a 'whole picture' view of performance",
            "sectionId": 8,
            "questionId": "8i",
            "maxScore": 1,
            "strengthOrder": "I13",
            "actionOrder": "I13"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "A range of tools and analysis techniques are used to assess performance",
            "actionThreshold": 0.25,
            "actionText": "Use a range of tools and analysis techniques are used to assess performance",
            "strengthThreshold": 0.5,
            "text": "A range of tools and analysis techniques are used to assess performance.",
            "sectionId": 8,
            "questionId": "8j",
            "maxScore": 1,
            "strengthOrder": "I14",
            "actionOrder": "I14"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": null,
            "actionThreshold": 0,
            "actionText": "Improve communications team evaluation to fit in with broader culture of performance measurement in the organisation",
            "strengthThreshold": 2,
            "text": "While other parts of the organisation have a strong performance evaluation program, the communications team evaluation is not as robust",
            "sectionId": 8,
            "questionId": "8k",
            "maxScore": 1,
            "strengthOrder": "I15",
            "actionOrder": "I15"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We use ethnography",
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 0.5,
            "text": "Ethnography (observation, video ethnography, netnography)",
            "sectionId": 9,
            "questionId": "9a",
            "maxScore": 1,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We use big data analysis",
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 0.5,
            "text": "Big data analysis (advanced data mining and data analytics)",
            "sectionId": 9,
            "questionId": "9b",
            "maxScore": 1,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "Re use randomised controlled trials and experiments",
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 0.5,
            "text": "Randomized controlled trials (RCTs) and experiments",
            "sectionId": 9,
            "questionId": "9c",
            "maxScore": 1,
            "strengthOrder": "R99",
            "actionOrder": "R99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 2,
            "strengthText": "We get behavioral insights from cultural and societal trends tracking",
            "actionThreshold": -1,
            "actionText": 0,
            "strengthThreshold": 0.5,
            "text": "Behavioural insights from cultural and societal trends tracking",
            "sectionId": 9,
            "questionId": "9d",
            "maxScore": 1,
            "strengthOrder": "P99",
            "actionOrder": "P99"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 1,
            "strengthText": "We monitor the latest technological and methodological developments to ensure the most up to date practices are used",
            "actionThreshold": 0.25,
            "actionText": "Monitor the latest technological and methodological developments to ensure the most up to date practices are used",
            "strengthThreshold": 0.5,
            "text": "The latest technological and methodological developments are monitored to ensure the most up to date practices are used",
            "sectionId": 10,
            "questionId": "10a",
            "maxScore": 1,
            "strengthOrder": "R19",
            "actionOrder": "R19"
        },
        {
            "questionTypeId": 1,
            "dimensionId": 3,
            "strengthText": "The organisation is well prepared to adapt and adopt new developments in technology",
            "actionThreshold": 0.25,
            "actionText": "Ensure the organisation is well prepared to adapt and adopt new developments in technology",
            "strengthThreshold": 0.5,
            "text": "The organisation is well prepared to adapt and adopt new developments",
            "sectionId": 10,
            "questionId": "10b",
            "maxScore": 1,
            "strengthOrder": "I16",
            "actionOrder": "I16"
        }
    ],
    "sections": [
        {
            "sectionText": "To begin with, we would like to ask a few questions about your organisation so that we can classify the results. This will enable us to explore the data in more depth, comparing different groups and types of organisation.\n\nThe data will be used to contribute to an overall data set that will allow you and other organisations to benchmark themselves.  Please note that other users will only be able to see the aggregate findings from this data set and will not be exposed to your specific answers.  No individual or organisation will be identified in any analysis.\n\nIf you are an agency and are answering on behalf of a client then please answer the following questions from the perspective of that client.",
            "sectionName": "About your organisation",
            "sectionId": 1
        },
        {
            "sectionText": "How often do you measure and evaluate across the following \u2026 ?",
            "sectionName": "Frquency of measurement and evaluation",
            "sectionId": 2
        },
        {
            "sectionText": "When you measure and evaluate paid, earned, shared and owned media activity, how often do you report on the following?",
            "sectionName": "Use of reporting ",
            "sectionId": 3
        },
        {
            "sectionText": "Now, thinking about how communications is leveraged within you or your client's organisation, how often do you do the following \u2026 ?",
            "sectionName": "Comms within the organisation",
            "sectionId": 4
        },
        {
            "sectionText": "How do you use PR and communications measurement and evaluation?",
            "sectionName": "Use of PR and communications measurement and evaluation",
            "sectionId": 5
        },
        {
            "sectionText": "How do you measure and evaluate changes in audience awareness, perception and engagement?",
            "sectionName": "Audience out-takes and outcomes",
            "sectionId": 6
        },
        {
            "sectionText": "How do you approach understanding how activity drives organisation outcomes such as sales or other audience behaviour?",
            "sectionName": "Organisation outcomes",
            "sectionId": 7
        },
        {
            "sectionText": "Thinking about your whole organisation - all the teams e.g. communications/ sales/ marketing/ operational etc. - how well do the following statements describe the culture of your organisation.",
            "sectionName": "Organisation culture",
            "sectionId": 8
        },
        {
            "sectionText": "Thinking about the more advanced tools and techniques that your organisation might use, which if any, are you aware of?",
            "sectionName": "Advanced tools",
            "sectionId": 9
        },
        {
            "sectionText": "With increasing advances in technology and analytics services, how well do you think your organisation is prepared to adopt new techniques of performance evaluation?",
            "sectionName": "Technological advances",
            "sectionId": 10
        }
    ],
    "answers": [
        {
            "score": null,
            "questionId": "1a",
            "text": "Commercial organisation",
            "sectionId": 1,
            "answerId": 1
        },
        {
            "score": null,
            "questionId": "1a",
            "text": "Agency",
            "sectionId": 1,
            "answerId": 2,
            "setRoutingCondition": {
                "key": "ORG_TYPE",
                "value": "AGENCY"
            }
        },
        {
            "score": null,
            "questionId": "1a",
            "text": "Government department",
            "sectionId": 1,
            "answerId": 3
        },
        {
            "score": null,
            "questionId": "1a",
            "text": "Not for profit organisation",
            "sectionId": 1,
            "answerId": 4
        },
        {
            "score": null,
            "questionId": "1a2",
            "text": "I'm answering on behalf of my agency",
            "sectionId": 1,
            "answerId": 382,
            "setRoutingCondition": {
                "key": "AGENCY_TARGET",
                "value": "AGENCY"
            }
        },
        {
            "score": null,
            "questionId": "1a2",
            "text": "I'm answering on behalf of a client",
            "sectionId": 1,
            "answerId": 383,
            "setRoutingCondition": {
                "key": "AGENCY_TARGET",
                "value": "CLIENT"
            }
        },
        {
            "score": null,
            "questionId": "1b",
            "text": "Communications",
            "sectionId": 1,
            "answerId": 5
        },
        {
            "score": null,
            "questionId": "1b",
            "text": "Other",
            "sectionId": 1,
            "answerId": 6
        },
        {
            "score": null,
            "questionId": "1b",
            "text": "Marketing",
            "sectionId": 1,
            "answerId": 7
        },
        {
            "score": null,
            "questionId": "1b",
            "text": "Social media",
            "sectionId": 1,
            "answerId": 8
        },
        {
            "score": null,
            "questionId": "1b",
            "text": "Digital",
            "sectionId": 1,
            "answerId": 9
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Aerospace and aviation",
            "sectionId": 1,
            "answerId": 10
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Agriculture and Fishing",
            "sectionId": 1,
            "answerId": 11
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Automotive",
            "sectionId": 1,
            "answerId": 12
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Chemicals",
            "sectionId": 1,
            "answerId": 13
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Construction",
            "sectionId": 1,
            "answerId": 14
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Defence",
            "sectionId": 1,
            "answerId": 15
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Education",
            "sectionId": 1,
            "answerId": 16
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Electronics",
            "sectionId": 1,
            "answerId": 17
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Energy and Power",
            "sectionId": 1,
            "answerId": 18
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Entertainment",
            "sectionId": 1,
            "answerId": 19
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Financial services",
            "sectionId": 1,
            "answerId": 20
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Food",
            "sectionId": 1,
            "answerId": 21
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Health care",
            "sectionId": 1,
            "answerId": 22
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Hospitality",
            "sectionId": 1,
            "answerId": 23
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Manufacuring",
            "sectionId": 1,
            "answerId": 24
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Mining",
            "sectionId": 1,
            "answerId": 25
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Music",
            "sectionId": 1,
            "answerId": 26
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Oil and Gas",
            "sectionId": 1,
            "answerId": 27
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Pharmaceutical",
            "sectionId": 1,
            "answerId": 28
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Public utilities",
            "sectionId": 1,
            "answerId": 29
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Publishing and news media",
            "sectionId": 1,
            "answerId": 30
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Pulp and paper",
            "sectionId": 1,
            "answerId": 31
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Real estate",
            "sectionId": 1,
            "answerId": 32
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Shipbuilding",
            "sectionId": 1,
            "answerId": 33
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Steel",
            "sectionId": 1,
            "answerId": 34
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Technology",
            "sectionId": 1,
            "answerId": 35
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Telecommunications",
            "sectionId": 1,
            "answerId": 36
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Transport",
            "sectionId": 1,
            "answerId": 37
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Water",
            "sectionId": 1,
            "answerId": 38
        },
        {
            "score": null,
            "questionId": "1c",
            "text": "Other",
            "sectionId": 1,
            "answerId": 39
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "A specialist measurement and analytics company",
            "sectionId": 1,
            "answerId": 40
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "A PR consultancy",
            "sectionId": 1,
            "answerId": 41
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "An integrated communications consultancy",
            "sectionId": 1,
            "answerId": 42
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "A marketing or digital agency",
            "sectionId": 1,
            "answerId": 43
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "A management consultancy",
            "sectionId": 1,
            "answerId": 44
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "An independent consultant",
            "sectionId": 1,
            "answerId": 45
        },
        {
            "score": null,
            "questionId": "1d",
            "text": "Other type of consultancy",
            "sectionId": 1,
            "answerId": 46
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "1-49 employees",
            "sectionId": 1,
            "answerId": 47
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "50-99 employees",
            "sectionId": 1,
            "answerId": 48
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "100-249 employees",
            "sectionId": 1,
            "answerId": 49
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "250-999 employees",
            "sectionId": 1,
            "answerId": 50
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "1000-4999 employees",
            "sectionId": 1,
            "answerId": 51
        },
        {
            "score": null,
            "questionId": "1e",
            "text": "More than 5,000 employees",
            "sectionId": 1,
            "answerId": 52
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "North America",
            "sectionId": 1,
            "answerId": 53
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Central America",
            "sectionId": 1,
            "answerId": 54
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "South America",
            "sectionId": 1,
            "answerId": 55
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Africa",
            "sectionId": 1,
            "answerId": 56
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Middle East",
            "sectionId": 1,
            "answerId": 57
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Western/Northern Europe",
            "sectionId": 1,
            "answerId": 58
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Southern Europe",
            "sectionId": 1,
            "answerId": 59
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Eastern Europe",
            "sectionId": 1,
            "answerId": 60
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Central Asia",
            "sectionId": 1,
            "answerId": 61
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "South Asia",
            "sectionId": 1,
            "answerId": 62
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "South East Asia",
            "sectionId": 1,
            "answerId": 63
        },
        {
            "score": null,
            "questionId": "1f",
            "text": "Australasia",
            "sectionId": 1,
            "answerId": 64
        },
        {
            "score": null,
            "questionId": "1g",
            "text": "placeHolder",
            "sectionId": 1,
            "answerId": 2309
        },
        {
            "score": null,
            "questionId": "1h",
            "text": "For the country I\u2019m based in",
            "sectionId": 1,
            "answerId": 65
        },
        {
            "score": null,
            "questionId": "1h",
            "text": "For the region I\u2019m based in",
            "sectionId": 1,
            "answerId": 66
        },
        {
            "score": null,
            "questionId": "1h",
            "text": "Globally",
            "sectionId": 1,
            "answerId": 67
        },
        {
            "score": null,
            "questionId": "1h",
            "text": "Not an international organisation",
            "sectionId": 1,
            "answerId": 68
        },
        {
            "score": null,
            "questionId": "1i",
            "text": "Yes",
            "sectionId": 1,
            "answerId": 69
        },
        {
            "score": null,
            "questionId": "1i",
            "text": "No",
            "sectionId": 1,
            "answerId": 70
        },
        {
            "score": 0,
            "questionId": "2a",
            "text": "Never",
            "sectionId": 2,
            "answerId": 71
        },
        {
            "score": 0.25,
            "questionId": "2a",
            "text": "Rarely (maybe once per year)",
            "sectionId": 2,
            "answerId": 72
        },
        {
            "score": 0.5,
            "questionId": "2a",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 2,
            "answerId": 73
        },
        {
            "score": 0.75,
            "questionId": "2a",
            "text": "Regularly (at least quarterly)",
            "sectionId": 2,
            "answerId": 74
        },
        {
            "score": 1,
            "questionId": "2a",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 2,
            "answerId": 75
        },
        {
            "score": 0,
            "questionId": "2b",
            "text": "Never",
            "sectionId": 2,
            "answerId": 76
        },
        {
            "score": 0.25,
            "questionId": "2b",
            "text": "Rarely (maybe once per year)",
            "sectionId": 2,
            "answerId": 77
        },
        {
            "score": 0.5,
            "questionId": "2b",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 2,
            "answerId": 78
        },
        {
            "score": 0.75,
            "questionId": "2b",
            "text": "Regularly (at least quarterly)",
            "sectionId": 2,
            "answerId": 79
        },
        {
            "score": 1,
            "questionId": "2b",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 2,
            "answerId": 80
        },
        {
            "score": 0,
            "questionId": "2c",
            "text": "Never",
            "sectionId": 2,
            "answerId": 81
        },
        {
            "score": 0.25,
            "questionId": "2c",
            "text": "Rarely (maybe once per year)",
            "sectionId": 2,
            "answerId": 82
        },
        {
            "score": 0.5,
            "questionId": "2c",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 2,
            "answerId": 83
        },
        {
            "score": 0.75,
            "questionId": "2c",
            "text": "Regularly (at least quarterly)",
            "sectionId": 2,
            "answerId": 84
        },
        {
            "score": 1,
            "questionId": "2c",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 2,
            "answerId": 85
        },
        {
            "score": 0,
            "questionId": "2d",
            "text": "Never",
            "sectionId": 2,
            "answerId": 86
        },
        {
            "score": 0.25,
            "questionId": "2d",
            "text": "Rarely (maybe once per year)",
            "sectionId": 2,
            "answerId": 87
        },
        {
            "score": 0.5,
            "questionId": "2d",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 2,
            "answerId": 88
        },
        {
            "score": 0.75,
            "questionId": "2d",
            "text": "Regularly (at least quarterly)",
            "sectionId": 2,
            "answerId": 89
        },
        {
            "score": 1,
            "questionId": "2d",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 2,
            "answerId": 90
        },
        {
            "score": 0,
            "questionId": "2e",
            "text": "Never",
            "sectionId": 2,
            "answerId": 91
        },
        {
            "score": 0.25,
            "questionId": "2e",
            "text": "Rarely (maybe once per year)",
            "sectionId": 2,
            "answerId": 92
        },
        {
            "score": 0.5,
            "questionId": "2e",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 2,
            "answerId": 93
        },
        {
            "score": 0.75,
            "questionId": "2e",
            "text": "Regularly (at least quarterly)",
            "sectionId": 2,
            "answerId": 94
        },
        {
            "score": 1,
            "questionId": "2e",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 2,
            "answerId": 95
        },
        {
            "score": 0,
            "questionId": "3a",
            "text": "Never",
            "sectionId": 3,
            "answerId": 96
        },
        {
            "score": 0,
            "questionId": "3a",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 97
        },
        {
            "score": 0,
            "questionId": "3a",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 98
        },
        {
            "score": 0,
            "questionId": "3a",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 99
        },
        {
            "score": 0,
            "questionId": "3a",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 100
        },
        {
            "score": 0,
            "questionId": "3b",
            "text": "Never",
            "sectionId": 3,
            "answerId": 101
        },
        {
            "score": -0.25,
            "questionId": "3b",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 102
        },
        {
            "score": -0.5,
            "questionId": "3b",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 103
        },
        {
            "score": -0.75,
            "questionId": "3b",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 104
        },
        {
            "score": -1,
            "questionId": "3b",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 105
        },
        {
            "score": 0,
            "questionId": "3c",
            "text": "Never",
            "sectionId": 3,
            "answerId": 106
        },
        {
            "score": 0.25,
            "questionId": "3c",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 107
        },
        {
            "score": 0.5,
            "questionId": "3c",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 108
        },
        {
            "score": 0.75,
            "questionId": "3c",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 109
        },
        {
            "score": 1,
            "questionId": "3c",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 110
        },
        {
            "score": 0,
            "questionId": "3d",
            "text": "Never",
            "sectionId": 3,
            "answerId": 111
        },
        {
            "score": 0.25,
            "questionId": "3d",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 112
        },
        {
            "score": 0.5,
            "questionId": "3d",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 113
        },
        {
            "score": 0.75,
            "questionId": "3d",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 114
        },
        {
            "score": 1,
            "questionId": "3d",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 115
        },
        {
            "score": 0,
            "questionId": "3e",
            "text": "Never",
            "sectionId": 3,
            "answerId": 116
        },
        {
            "score": 0,
            "questionId": "3e",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 117
        },
        {
            "score": 0,
            "questionId": "3e",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 118
        },
        {
            "score": 0,
            "questionId": "3e",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 119
        },
        {
            "score": 0,
            "questionId": "3e",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 120
        },
        {
            "score": 0,
            "questionId": "3f",
            "text": "Never",
            "sectionId": 3,
            "answerId": 121
        },
        {
            "score": 0.25,
            "questionId": "3f",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 122
        },
        {
            "score": 0.5,
            "questionId": "3f",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 123
        },
        {
            "score": 0.5,
            "questionId": "3f",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 124
        },
        {
            "score": 0.5,
            "questionId": "3f",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 125
        },
        {
            "score": 0,
            "questionId": "3g",
            "text": "Never",
            "sectionId": 3,
            "answerId": 126
        },
        {
            "score": 0.25,
            "questionId": "3g",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 127
        },
        {
            "score": 0.5,
            "questionId": "3g",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 128
        },
        {
            "score": 0.75,
            "questionId": "3g",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 129
        },
        {
            "score": 1,
            "questionId": "3g",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 130
        },
        {
            "score": 0,
            "questionId": "3h",
            "text": "Never",
            "sectionId": 3,
            "answerId": 131
        },
        {
            "score": 0.25,
            "questionId": "3h",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 132
        },
        {
            "score": 0.5,
            "questionId": "3h",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 133
        },
        {
            "score": 0.75,
            "questionId": "3h",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 134
        },
        {
            "score": 1,
            "questionId": "3h",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 135
        },
        {
            "score": 0,
            "questionId": "3i",
            "text": "Never",
            "sectionId": 3,
            "answerId": 136
        },
        {
            "score": 0.25,
            "questionId": "3i",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 137
        },
        {
            "score": 0.5,
            "questionId": "3i",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 138
        },
        {
            "score": 0.75,
            "questionId": "3i",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 139
        },
        {
            "score": 1,
            "questionId": "3i",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 140
        },
        {
            "score": 0,
            "questionId": "3j",
            "text": "Never",
            "sectionId": 3,
            "answerId": 141
        },
        {
            "score": 0.25,
            "questionId": "3j",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 142
        },
        {
            "score": 0.5,
            "questionId": "3j",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 143
        },
        {
            "score": 0.75,
            "questionId": "3j",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 144
        },
        {
            "score": 1,
            "questionId": "3j",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 145
        },
        {
            "score": 0,
            "questionId": "3k",
            "text": "Never",
            "sectionId": 3,
            "answerId": 146
        },
        {
            "score": 0.25,
            "questionId": "3k",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 147
        },
        {
            "score": 0.5,
            "questionId": "3k",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 148
        },
        {
            "score": 0.75,
            "questionId": "3k",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 149
        },
        {
            "score": 1,
            "questionId": "3k",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 150
        },
        {
            "score": 0,
            "questionId": "3l",
            "text": "Never",
            "sectionId": 3,
            "answerId": 151
        },
        {
            "score": 0.25,
            "questionId": "3l",
            "text": "Rarely (maybe once per year)",
            "sectionId": 3,
            "answerId": 152
        },
        {
            "score": 0.5,
            "questionId": "3l",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 3,
            "answerId": 153
        },
        {
            "score": 0.75,
            "questionId": "3l",
            "text": "Regularly (at least quarterly)",
            "sectionId": 3,
            "answerId": 154
        },
        {
            "score": 1,
            "questionId": "3l",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 3,
            "answerId": 155
        },
        {
            "score": 0,
            "questionId": "4a",
            "text": "Never",
            "sectionId": 4,
            "answerId": 156
        },
        {
            "score": 0.25,
            "questionId": "4a",
            "text": "Rarely (maybe once per year)",
            "sectionId": 4,
            "answerId": 157
        },
        {
            "score": 0.5,
            "questionId": "4a",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 4,
            "answerId": 158
        },
        {
            "score": 0.75,
            "questionId": "4a",
            "text": "Regularly (at least quarterly)",
            "sectionId": 4,
            "answerId": 159
        },
        {
            "score": 1,
            "questionId": "4a",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 4,
            "answerId": 160
        },
        {
            "score": 0,
            "questionId": "4b",
            "text": "Never",
            "sectionId": 4,
            "answerId": 161
        },
        {
            "score": 0.25,
            "questionId": "4b",
            "text": "Rarely (maybe once per year)",
            "sectionId": 4,
            "answerId": 162
        },
        {
            "score": 0.5,
            "questionId": "4b",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 4,
            "answerId": 163
        },
        {
            "score": 0.75,
            "questionId": "4b",
            "text": "Regularly (at least quarterly)",
            "sectionId": 4,
            "answerId": 164
        },
        {
            "score": 1,
            "questionId": "4b",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 4,
            "answerId": 165
        },
        {
            "score": 0,
            "questionId": "4c",
            "text": "Never",
            "sectionId": 4,
            "answerId": 166
        },
        {
            "score": 0.25,
            "questionId": "4c",
            "text": "Rarely (maybe once per year)",
            "sectionId": 4,
            "answerId": 167
        },
        {
            "score": 0.5,
            "questionId": "4c",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 4,
            "answerId": 168
        },
        {
            "score": 0.75,
            "questionId": "4c",
            "text": "Regularly (at least quarterly)",
            "sectionId": 4,
            "answerId": 169
        },
        {
            "score": 1,
            "questionId": "4c",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 4,
            "answerId": 170
        },
        {
            "score": 0,
            "questionId": "4d",
            "text": "Never",
            "sectionId": 4,
            "answerId": 171
        },
        {
            "score": 0.25,
            "questionId": "4d",
            "text": "Rarely (maybe once per year)",
            "sectionId": 4,
            "answerId": 172
        },
        {
            "score": 0.5,
            "questionId": "4d",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 4,
            "answerId": 173
        },
        {
            "score": 0.75,
            "questionId": "4d",
            "text": "Regularly (at least quarterly)",
            "sectionId": 4,
            "answerId": 174
        },
        {
            "score": 1,
            "questionId": "4d",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 4,
            "answerId": 175
        },
        {
            "score": 0,
            "questionId": "5a",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 176
        },
        {
            "score": 1,
            "questionId": "5a",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 177
        },
        {
            "score": 0.75,
            "questionId": "5a",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 178
        },
        {
            "score": 0.25,
            "questionId": "5a",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 179
        },
        {
            "score": 0,
            "questionId": "5a",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 180
        },
        {
            "score": 0,
            "questionId": "5a",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 181
        },
        {
            "score": 0,
            "questionId": "5b",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 182
        },
        {
            "score": 0,
            "questionId": "5b",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 183
        },
        {
            "score": 0,
            "questionId": "5b",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 184
        },
        {
            "score": 0.25,
            "questionId": "5b",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 185
        },
        {
            "score": 0.75,
            "questionId": "5b",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 186
        },
        {
            "score": 1,
            "questionId": "5b",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 187
        },
        {
            "score": 0,
            "questionId": "5c",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 188
        },
        {
            "score": 0,
            "questionId": "5c",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 189
        },
        {
            "score": 0,
            "questionId": "5c",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 190
        },
        {
            "score": 0.25,
            "questionId": "5c",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 191
        },
        {
            "score": 0.75,
            "questionId": "5c",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 192
        },
        {
            "score": 1,
            "questionId": "5c",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 193
        },
        {
            "score": 0,
            "questionId": "5d",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 194
        },
        {
            "score": 0,
            "questionId": "5d",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 195
        },
        {
            "score": 0,
            "questionId": "5d",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 196
        },
        {
            "score": 0.25,
            "questionId": "5d",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 197
        },
        {
            "score": 0.75,
            "questionId": "5d",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 198
        },
        {
            "score": 1,
            "questionId": "5d",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 199
        },
        {
            "score": 0,
            "questionId": "5e",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 200
        },
        {
            "score": 0,
            "questionId": "5e",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 201
        },
        {
            "score": 0,
            "questionId": "5e",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 202
        },
        {
            "score": 0.25,
            "questionId": "5e",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 203
        },
        {
            "score": 0.75,
            "questionId": "5e",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 204
        },
        {
            "score": 1,
            "questionId": "5e",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 205
        },
        {
            "score": 0,
            "questionId": "5f",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 206
        },
        {
            "score": 0,
            "questionId": "5f",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 207
        },
        {
            "score": 0,
            "questionId": "5f",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 208
        },
        {
            "score": 0.25,
            "questionId": "5f",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 209
        },
        {
            "score": 0.75,
            "questionId": "5f",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 210
        },
        {
            "score": 1,
            "questionId": "5f",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 211
        },
        {
            "score": 0,
            "questionId": "5g",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 212
        },
        {
            "score": 0,
            "questionId": "5g",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 213
        },
        {
            "score": 0,
            "questionId": "5g",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 214
        },
        {
            "score": 0.25,
            "questionId": "5g",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 215
        },
        {
            "score": 0.75,
            "questionId": "5g",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 216
        },
        {
            "score": 1,
            "questionId": "5g",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 217
        },
        {
            "score": 0,
            "questionId": "5h",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 218
        },
        {
            "score": 0,
            "questionId": "5h",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 219
        },
        {
            "score": 0,
            "questionId": "5h",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 220
        },
        {
            "score": 0.25,
            "questionId": "5h",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 221
        },
        {
            "score": 0.75,
            "questionId": "5h",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 222
        },
        {
            "score": 1,
            "questionId": "5h",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 223
        },
        {
            "score": 0,
            "questionId": "5i",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 5,
            "answerId": 224
        },
        {
            "score": 0,
            "questionId": "5i",
            "text": "Strongly disagree",
            "sectionId": 5,
            "answerId": 225
        },
        {
            "score": 0,
            "questionId": "5i",
            "text": "Disagree",
            "sectionId": 5,
            "answerId": 226
        },
        {
            "score": 0.25,
            "questionId": "5i",
            "text": "Neither agree nor disagree&#9;",
            "sectionId": 5,
            "answerId": 227
        },
        {
            "score": 0.75,
            "questionId": "5i",
            "text": "Agree",
            "sectionId": 5,
            "answerId": 228
        },
        {
            "score": 1,
            "questionId": "5i",
            "text": "Strongly Agree",
            "sectionId": 5,
            "answerId": 229
        },
        {
            "score": 0,
            "questionId": "6a",
            "text": "Never",
            "sectionId": 6,
            "answerId": 230
        },
        {
            "score": 0.25,
            "questionId": "6a",
            "text": "Rarely (maybe once per year)",
            "sectionId": 6,
            "answerId": 231
        },
        {
            "score": 0.5,
            "questionId": "6a",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 6,
            "answerId": 232
        },
        {
            "score": 0.75,
            "questionId": "6a",
            "text": "Regularly (at least quarterly)",
            "sectionId": 6,
            "answerId": 233
        },
        {
            "score": 1,
            "questionId": "6a",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 6,
            "answerId": 234
        },
        {
            "score": 0,
            "questionId": "6b",
            "text": "Never",
            "sectionId": 6,
            "answerId": 235
        },
        {
            "score": 0.25,
            "questionId": "6b",
            "text": "Rarely (maybe once per year)",
            "sectionId": 6,
            "answerId": 236
        },
        {
            "score": 0.5,
            "questionId": "6b",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 6,
            "answerId": 237
        },
        {
            "score": 0.75,
            "questionId": "6b",
            "text": "Regularly (at least quarterly)",
            "sectionId": 6,
            "answerId": 238
        },
        {
            "score": 1,
            "questionId": "6b",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 6,
            "answerId": 239
        },
        {
            "score": 0,
            "questionId": "6c",
            "text": "Never",
            "sectionId": 6,
            "answerId": 240
        },
        {
            "score": 0.25,
            "questionId": "6c",
            "text": "Rarely (maybe once per year)",
            "sectionId": 6,
            "answerId": 241
        },
        {
            "score": 0.5,
            "questionId": "6c",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 6,
            "answerId": 242
        },
        {
            "score": 0.75,
            "questionId": "6c",
            "text": "Regularly (at least quarterly)",
            "sectionId": 6,
            "answerId": 243
        },
        {
            "score": 1,
            "questionId": "6c",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 6,
            "answerId": 244
        },
        {
            "score": 0,
            "questionId": "6d",
            "text": "Never",
            "sectionId": 6,
            "answerId": 245
        },
        {
            "score": 0.25,
            "questionId": "6d",
            "text": "Rarely (maybe once per year)",
            "sectionId": 6,
            "answerId": 246
        },
        {
            "score": 0.5,
            "questionId": "6d",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 6,
            "answerId": 247
        },
        {
            "score": 0.75,
            "questionId": "6d",
            "text": "Regularly (at least quarterly)",
            "sectionId": 6,
            "answerId": 248
        },
        {
            "score": 1,
            "questionId": "6d",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 6,
            "answerId": 249
        },
        {
            "score": 0,
            "questionId": "6e",
            "text": "Never",
            "sectionId": 6,
            "answerId": 250
        },
        {
            "score": 0.25,
            "questionId": "6e",
            "text": "Rarely (maybe once per year)",
            "sectionId": 6,
            "answerId": 251
        },
        {
            "score": 0.5,
            "questionId": "6e",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 6,
            "answerId": 252
        },
        {
            "score": 0.75,
            "questionId": "6e",
            "text": "Regularly (at least quarterly)",
            "sectionId": 6,
            "answerId": 253
        },
        {
            "score": 1,
            "questionId": "6e",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 6,
            "answerId": 254
        },
        {
            "score": 0,
            "questionId": "7a",
            "text": "Never",
            "sectionId": 7,
            "answerId": 255
        },
        {
            "score": 0.25,
            "questionId": "7a",
            "text": "Rarely (maybe once per year)",
            "sectionId": 7,
            "answerId": 256
        },
        {
            "score": 0.5,
            "questionId": "7a",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 7,
            "answerId": 257
        },
        {
            "score": 0.5,
            "questionId": "7a",
            "text": "Regularly (at least quarterly)",
            "sectionId": 7,
            "answerId": 258
        },
        {
            "score": 0.5,
            "questionId": "7a",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 7,
            "answerId": 259
        },
        {
            "score": 0,
            "questionId": "7b",
            "text": "Never",
            "sectionId": 7,
            "answerId": 260
        },
        {
            "score": 0.25,
            "questionId": "7b",
            "text": "Rarely (maybe once per year)",
            "sectionId": 7,
            "answerId": 261
        },
        {
            "score": 0.5,
            "questionId": "7b",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 7,
            "answerId": 262
        },
        {
            "score": 0.75,
            "questionId": "7b",
            "text": "Regularly (at least quarterly)",
            "sectionId": 7,
            "answerId": 263
        },
        {
            "score": 1,
            "questionId": "7b",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 7,
            "answerId": 264
        },
        {
            "score": 0,
            "questionId": "7c",
            "text": "Never",
            "sectionId": 7,
            "answerId": 265
        },
        {
            "score": 0.25,
            "questionId": "7c",
            "text": "Rarely (maybe once per year)",
            "sectionId": 7,
            "answerId": 266
        },
        {
            "score": 0.5,
            "questionId": "7c",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 7,
            "answerId": 267
        },
        {
            "score": 0.75,
            "questionId": "7c",
            "text": "Regularly (at least quarterly)",
            "sectionId": 7,
            "answerId": 268
        },
        {
            "score": 1,
            "questionId": "7c",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 7,
            "answerId": 269
        },
        {
            "score": 0,
            "questionId": "7d",
            "text": "Never",
            "sectionId": 7,
            "answerId": 270
        },
        {
            "score": 0.25,
            "questionId": "7d",
            "text": "Rarely (maybe once per year)",
            "sectionId": 7,
            "answerId": 271
        },
        {
            "score": 0.5,
            "questionId": "7d",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 7,
            "answerId": 272
        },
        {
            "score": 0.75,
            "questionId": "7d",
            "text": "Regularly (at least quarterly)",
            "sectionId": 7,
            "answerId": 273
        },
        {
            "score": 1,
            "questionId": "7d",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 7,
            "answerId": 274
        },
        {
            "score": 0,
            "questionId": "7e",
            "text": "Never",
            "sectionId": 7,
            "answerId": 275
        },
        {
            "score": 0.25,
            "questionId": "7e",
            "text": "Rarely (maybe once per year)",
            "sectionId": 7,
            "answerId": 276
        },
        {
            "score": 0.5,
            "questionId": "7e",
            "text": "Sometimes / on an ad-hoc basis",
            "sectionId": 7,
            "answerId": 277
        },
        {
            "score": 0.75,
            "questionId": "7e",
            "text": "Regularly (at least quarterly)",
            "sectionId": 7,
            "answerId": 278
        },
        {
            "score": 1,
            "questionId": "7e",
            "text": "Frequently (e.g. every time we run some activity or monthly)",
            "sectionId": 7,
            "answerId": 279
        },
        {
            "score": 0,
            "questionId": "8a",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 280
        },
        {
            "score": 0,
            "questionId": "8a",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 281
        },
        {
            "score": 0,
            "questionId": "8a",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 282
        },
        {
            "score": 0.25,
            "questionId": "8a",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 283
        },
        {
            "score": 0.75,
            "questionId": "8a",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 284
        },
        {
            "score": 1,
            "questionId": "8a",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 285
        },
        {
            "score": 0,
            "questionId": "8b",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 286
        },
        {
            "score": 0,
            "questionId": "8b",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 287
        },
        {
            "score": 0,
            "questionId": "8b",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 288
        },
        {
            "score": 0.25,
            "questionId": "8b",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 289
        },
        {
            "score": 0.75,
            "questionId": "8b",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 290
        },
        {
            "score": 1,
            "questionId": "8b",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 291
        },
        {
            "score": 0,
            "questionId": "8c",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 292
        },
        {
            "score": 0,
            "questionId": "8c",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 293
        },
        {
            "score": 0,
            "questionId": "8c",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 294
        },
        {
            "score": 0.25,
            "questionId": "8c",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 295
        },
        {
            "score": 0.75,
            "questionId": "8c",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 296
        },
        {
            "score": 1,
            "questionId": "8c",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 297
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 298
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 299
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 300
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 301
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 302
        },
        {
            "score": 0,
            "questionId": "8d",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 303
        },
        {
            "score": 0,
            "questionId": "8e",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 304
        },
        {
            "score": 0,
            "questionId": "8e",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 305
        },
        {
            "score": 0,
            "questionId": "8e",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 306
        },
        {
            "score": 0.25,
            "questionId": "8e",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 307
        },
        {
            "score": 0.75,
            "questionId": "8e",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 308
        },
        {
            "score": 1,
            "questionId": "8e",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 309
        },
        {
            "score": 0,
            "questionId": "8f",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 310
        },
        {
            "score": 0,
            "questionId": "8f",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 311
        },
        {
            "score": 0,
            "questionId": "8f",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 312
        },
        {
            "score": 0.25,
            "questionId": "8f",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 313
        },
        {
            "score": 0.75,
            "questionId": "8f",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 314
        },
        {
            "score": 1,
            "questionId": "8f",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 315
        },
        {
            "score": 0,
            "questionId": "8g",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 316
        },
        {
            "score": 0,
            "questionId": "8g",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 317
        },
        {
            "score": 0,
            "questionId": "8g",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 318
        },
        {
            "score": 0.25,
            "questionId": "8g",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 319
        },
        {
            "score": 0.75,
            "questionId": "8g",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 320
        },
        {
            "score": 1,
            "questionId": "8g",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 321
        },
        {
            "score": 0,
            "questionId": "8h",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 322
        },
        {
            "score": 0,
            "questionId": "8h",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 323
        },
        {
            "score": 0,
            "questionId": "8h",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 324
        },
        {
            "score": 0.25,
            "questionId": "8h",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 325
        },
        {
            "score": 0.75,
            "questionId": "8h",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 326
        },
        {
            "score": 1,
            "questionId": "8h",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 327
        },
        {
            "score": 0,
            "questionId": "8i",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 328
        },
        {
            "score": 0,
            "questionId": "8i",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 329
        },
        {
            "score": 0,
            "questionId": "8i",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 330
        },
        {
            "score": 0.25,
            "questionId": "8i",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 331
        },
        {
            "score": 0.75,
            "questionId": "8i",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 332
        },
        {
            "score": 1,
            "questionId": "8i",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 333
        },
        {
            "score": 0,
            "questionId": "8j",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 334
        },
        {
            "score": 0,
            "questionId": "8j",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 335
        },
        {
            "score": 0,
            "questionId": "8j",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 336
        },
        {
            "score": 0.25,
            "questionId": "8j",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 337
        },
        {
            "score": 0.75,
            "questionId": "8j",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 338
        },
        {
            "score": 1,
            "questionId": "8j",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 339
        },
        {
            "score": 1,
            "questionId": "8k",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 8,
            "answerId": 340
        },
        {
            "score": 0.75,
            "questionId": "8k",
            "text": "Strongly disagree",
            "sectionId": 8,
            "answerId": 341
        },
        {
            "score": 0.25,
            "questionId": "8k",
            "text": "Disagree",
            "sectionId": 8,
            "answerId": 342
        },
        {
            "score": 0,
            "questionId": "8k",
            "text": "Neither agree nor disagree",
            "sectionId": 8,
            "answerId": 343
        },
        {
            "score": 0,
            "questionId": "8k",
            "text": "Agree",
            "sectionId": 8,
            "answerId": 344
        },
        {
            "score": 0,
            "questionId": "8k",
            "text": "Strongly Agree",
            "sectionId": 8,
            "answerId": 345
        },
        {
            "score": 0,
            "questionId": "9a",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 9,
            "answerId": 346
        },
        {
            "score": 0,
            "questionId": "9a",
            "text": "Not aware of",
            "sectionId": 9,
            "answerId": 347
        },
        {
            "score": 0.25,
            "questionId": "9a",
            "text": "Aware of but do not use",
            "sectionId": 9,
            "answerId": 348
        },
        {
            "score": 0.5,
            "questionId": "9a",
            "text": "Use rarely",
            "sectionId": 9,
            "answerId": 349
        },
        {
            "score": 0.75,
            "questionId": "9a",
            "text": "Use regularly",
            "sectionId": 9,
            "answerId": 350
        },
        {
            "score": 1,
            "questionId": "9a",
            "text": "Are a key part of our evaluation program",
            "sectionId": 9,
            "answerId": 351
        },
        {
            "score": 0,
            "questionId": "9b",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 9,
            "answerId": 352
        },
        {
            "score": 0,
            "questionId": "9b",
            "text": "Not aware of",
            "sectionId": 9,
            "answerId": 353
        },
        {
            "score": 0.25,
            "questionId": "9b",
            "text": "Aware of but do not use",
            "sectionId": 9,
            "answerId": 354
        },
        {
            "score": 0.5,
            "questionId": "9b",
            "text": "Use rarely",
            "sectionId": 9,
            "answerId": 355
        },
        {
            "score": 0.75,
            "questionId": "9b",
            "text": "Use regularly",
            "sectionId": 9,
            "answerId": 356
        },
        {
            "score": 1,
            "questionId": "9b",
            "text": "Are a key part of our evaluation program",
            "sectionId": 9,
            "answerId": 357
        },
        {
            "score": 0,
            "questionId": "9c",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 9,
            "answerId": 358
        },
        {
            "score": 0,
            "questionId": "9c",
            "text": "Not aware of",
            "sectionId": 9,
            "answerId": 359
        },
        {
            "score": 0.25,
            "questionId": "9c",
            "text": "Aware of but do not use",
            "sectionId": 9,
            "answerId": 360
        },
        {
            "score": 0.5,
            "questionId": "9c",
            "text": "Use rarely",
            "sectionId": 9,
            "answerId": 361
        },
        {
            "score": 0.75,
            "questionId": "9c",
            "text": "Use regularly",
            "sectionId": 9,
            "answerId": 362
        },
        {
            "score": 1,
            "questionId": "9c",
            "text": "Are a key part of our evaluation program",
            "sectionId": 9,
            "answerId": 363
        },
        {
            "score": 0,
            "questionId": "9d",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 9,
            "answerId": 364
        },
        {
            "score": 0,
            "questionId": "9d",
            "text": "Not aware of",
            "sectionId": 9,
            "answerId": 365
        },
        {
            "score": 0.25,
            "questionId": "9d",
            "text": "Aware of but do not use",
            "sectionId": 9,
            "answerId": 366
        },
        {
            "score": 0.5,
            "questionId": "9d",
            "text": "Use rarely",
            "sectionId": 9,
            "answerId": 367
        },
        {
            "score": 0.75,
            "questionId": "9d",
            "text": "Use regularly",
            "sectionId": 9,
            "answerId": 368
        },
        {
            "score": 1,
            "questionId": "9d",
            "text": "Are a key part of our evaluation program",
            "sectionId": 9,
            "answerId": 369
        },
        {
            "score": 0,
            "questionId": "10a",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 10,
            "answerId": 370
        },
        {
            "score": 0,
            "questionId": "10a",
            "text": "Strongly disagree",
            "sectionId": 10,
            "answerId": 371
        },
        {
            "score": 0,
            "questionId": "10a",
            "text": "Disagree",
            "sectionId": 10,
            "answerId": 372
        },
        {
            "score": 0.25,
            "questionId": "10a",
            "text": "Neither agree nor disagree",
            "sectionId": 10,
            "answerId": 373
        },
        {
            "score": 0.5,
            "questionId": "10a",
            "text": "Agree",
            "sectionId": 10,
            "answerId": 374
        },
        {
            "score": 1,
            "questionId": "10a",
            "text": "Strongly Agree",
            "sectionId": 10,
            "answerId": 375
        },
        {
            "score": 0,
            "questionId": "10b",
            "text": "Don\u2019t know/Not sure",
            "sectionId": 10,
            "answerId": 376
        },
        {
            "score": 0,
            "questionId": "10b",
            "text": "Strongly disagree",
            "sectionId": 10,
            "answerId": 377
        },
        {
            "score": 0,
            "questionId": "10b",
            "text": "Disagree",
            "sectionId": 10,
            "answerId": 378
        },
        {
            "score": 0.25,
            "questionId": "10b",
            "text": "Neither agree nor disagree",
            "sectionId": 10,
            "answerId": 379
        },
        {
            "score": 0.5,
            "questionId": "10b",
            "text": "Agree",
            "sectionId": 10,
            "answerId": 380
        },
        {
            "score": 1,
            "questionId": "10b",
            "text": "Strongly Agree",
            "sectionId": 10,
            "answerId": 381
        }
    ],
    "pages": [
        {
            "index": 1,
            "template": "PAGE_ONE",
            "sectionId": 1,
            "questionIds": ["1a"]
        },
        {
            "index": 2,
            "template": "STANDARD_PAGE",
            "sectionId": 1,
            "routingRuleKeys": ["displayAgencyTargetPage"],
            "questionIds": ["1a2"]
        },
        {
            "index": 3,
            "sectionId": 1,
            "template": "STANDARD_PAGE",
            "questionIds": [
                "1b",
                "1c",
                "1d",
                "1e",
                "1f",
                "1g",
                "1h",
                "1i"
            ]
        }
    ],
    "routingRules": {
        "displayAgencyTargetPage": {
            "type" : "SHOW_IF_ALL",
            "flags": [
                {
                    "key": "ORG_TYPE",
                    "value": "AGENCY"
                }
            ]
        },
        "teamRoleQuestionWording": {
            "type" : "CHANGE_TEXT_IF_ALL",
            "flags": [
                {
                    "key": "ORG_TYPE",
                    "value": "AGENCY"
                },
                {
                    "key": "AGENCY_TARGET",
                    "value": "CLIENT"
                }
            ],
            "trueVal": "the client",
            "falseVal": "your"
        },
        "countryQuestionWording": {
            "type" : "CHANGE_TEXT_IF_ALL",
            "flags": [
                {
                    "key": "ORG_TYPE",
                    "value": "AGENCY"
                },
                {
                    "key": "AGENCY_TARGET",
                    "value": "CLIENT"
                }
            ],
            "trueVal": "is your client",
            "falseVal": "are you"
        }


    }
};

export default data;