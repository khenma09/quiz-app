const quizData = [
	// 50 previous questions
	{
		question:
			"What is the primary focus of Personal Survival Techniques (PST)?",
		options: [
			"Navigation skills",
			"Fire prevention",
			"Survival at sea and use of safety equipment",
			"Maintaining ship stability",
		],
		correct: 2,
	},
	{
		question: "Which of the following should be done when discovering a fire?",
		options: [
			"Sound the fire alarm",
			"Contain the fire immediately without notifying others",
			"Try to extinguish the fire without calling for help",
			"Evacuate the ship immediately",
		],
		correct: 0,
	},
	{
		question:
			"What is the recommended height from which it is safe to jump into the water while wearing a lifejacket?",
		options: ["2.5 meters", "4.5 meters", "5.5 meters", "6.5 meters"],
		correct: 1,
	},
	{
		question:
			"Which of the following statements about immersion suits is true?",
		options: [
			"Immersion suits are typically worn only in warm water environments.",
			"Immersion suits are designed to reduce body heat loss in cold water.",
			"Immersion suits do not cover the head and hands.",
			"Immersion suits should not be used in emergencies.",
		],
		correct: 1,
	},
	{
		question: "Which fire extinguisher is appropriate for electrical fires?",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Dry chemical extinguisher",
		],
		correct: 2,
	},
	{
		question:
			"Which of the following should NOT be used when extinguishing a Class C fire?",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Dry chemical extinguisher",
		],
		correct: 0,
	},
	{
		question:
			"What is the recommended acronym to follow when using a fire extinguisher?",
		options: ["STOP", "PASS", "HELP", "PUSH"],
		correct: 1,
	},
	{
		question: "Which of the following is NOT a life-saving appliance?",
		options: ["Lifebuoy", "Lifejacket", "Immersion suit", "Fire extinguisher"],
		correct: 3,
	},
	{
		question:
			"How often must seafarers provide evidence of maintaining their competence in basic training?",
		options: [
			"Every year",
			"Every two years",
			"Every five years",
			"Every ten years",
		],
		correct: 2,
	},
	{
		question:
			"What type of fire extinguisher is recommended for extinguishing oil fires?",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Dry powder extinguisher",
		],
		correct: 1,
	},
	{
		question:
			"True or False: An immersion suit helps prevent the reduction of body heat loss in cold water.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"True or False: A lifejacket must be able to turn an unconscious person in the water to a position where their mouth is clear of water within 5 seconds.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"True or False: A life raft can only be launched manually in an emergency.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"True or False: The first action upon discovering a fire should be to try to extinguish it without raising the alarm.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"True or False: An inflated immersion suit does not provide any buoyancy.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"True or False: It is safe to jump into the water from a height greater than 4.5 meters while wearing a lifejacket.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"True or False: The fireman’s outfit consists of fire protective suits, helmets, gloves, boots, and self-contained breathing apparatus (SCBA).",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"True or False: Panic is the most destructive response to a survival situation.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"True or False: CO2 extinguishers are effective on Class A fires.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"True or False: Regular drills and preparedness are essential for surviving emergencies.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"The immersion suit is typically made of __________, which is completely waterproof and can withstand extreme temperatures.",
		options: ["Nylon", "Neoprene", "Cotton", "Polyester"],
		correct: 1,
	},
	{
		question:
			"The acronym PASS stands for __________, __________, __________, and __________ when using a fire extinguisher.",
		options: [
			"Push, Aim, Slide, Sweep",
			"Pull, Aim, Squeeze, Sweep",
			"Pull, Adjust, Squeeze, Stop",
			"Push, Adjust, Slide, Spray",
		],
		correct: 1,
	},
	{
		question:
			"In cold water, the recommended survival posture to conserve heat is called the __________ technique.",
		options: ["H.E.L.P.", "R.A.C.E.", "S.T.O.P.", "P.A.S.S."],
		correct: 0,
	},
	{
		question:
			"For survival without a lifejacket, inflating your __________ can provide buoyancy in the water.",
		options: ["Trousers", "Shirt", "Life raft", "Socks"],
		correct: 0,
	},
	{
		question:
			"In the case of a fire involving electrical equipment, the appropriate fire extinguisher to use is __________.",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Powder extinguisher",
		],
		correct: 2,
	},
	{
		question:
			"What is the recommended safe height from which to jump into water wearing a lifejacket?",
		options: ["2 meters", "4.5 meters", "5 meters", "6 meters"],
		correct: 1,
	},
	{
		question: "Which of the following is NOT a type of immersion suit?",
		options: [
			"Rescue suit",
			"Inflatable suit",
			"Anti-exposure suit",
			"Heated suit",
		],
		correct: 3,
	},
	{
		question:
			"What should be done immediately after discovering a fire on a ship?",
		options: [
			"Extinguish the fire immediately without alerting others",
			"Raise the alarm",
			"Find the nearest water source",
			"Wait for instructions",
		],
		correct: 1,
	},
	{
		question:
			"Which type of extinguisher should be used for an oil fire in the engine room?",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Dry chemical extinguisher",
		],
		correct: 1,
	},
	{
		question:
			"What are the two key components needed to operate a portable foam extinguisher?",
		options: [
			"Water and air pressure",
			"Foam-forming liquid and a foam nozzle",
			"Oxygen and water",
			"Dry powder and CO2",
		],
		correct: 1,
	},
	{
		question:
			"True or False: An immersion suit can prevent body temperature from dropping below 35°C in cold water for at least 6 hours.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"Which is the safest position to assume when falling into cold water to conserve body heat?",
		options: [
			"Fetal position",
			"Heat Escape Lessening Posture (H.E.L.P.)",
			"Starfish position",
			"Vertical float",
		],
		correct: 1,
	},
	{
		question:
			"Which safety rule applies when using a portable fire extinguisher?",
		options: [
			"Always extinguish the fire from a distance",
			"Sound the fire alarm before using the extinguisher",
			"Only use the extinguisher when instructed by the captain",
			"Stand with your back to the fire while using the extinguisher",
		],
		correct: 1,
	},
	{
		question:
			"Which of the following actions should be taken first in the event of engine failure?",
		options: [
			"Start the emergency generator",
			"Inform the master",
			"Drop anchor",
			"Steer the vessel using manual steering",
		],
		correct: 1,
	},
	{
		question:
			"What is the purpose of the 'PASS' acronym when using a fire extinguisher?",
		options: [
			"Protect, Aim, Spray, Stop",
			"Pull, Aim, Squeeze, Sweep",
			"Push, Activate, Stop, Squeeze",
			"Pull, Adjust, Spray, Stop",
		],
		correct: 1,
	},
	{
		question:
			"True or False: CO2 fire extinguishers are suitable for Class A fires.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"How often should training for portable fire extinguisher use be conducted?",
		options: ["Every 6 months", "Every year", "Every 2 years", "Every 5 years"],
		correct: 1,
	},
	{
		question:
			"Which type of fire extinguisher is most suitable for electrical equipment?",
		options: ["CO2", "Foam", "Water", "Dry chemical"],
		correct: 0,
	},
	{
		question: "What does the immersion suit protect against?",
		options: [
			"Chemical burns",
			"Fire and electrical shocks",
			"Cold water and hypothermia",
			"Sun exposure",
		],
		correct: 2,
	},
	{
		question: "What is the main purpose of life-saving appliances on ships?",
		options: [
			"To improve crew's comfort at sea",
			"To ensure survival in emergency situations",
			"To enhance vessel maneuverability",
			"To protect the environment",
		],
		correct: 1,
	},
	{
		question:
			"True or False: Foam fire extinguishers can be safely used for Class D fires (combustible metals).",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"Which of the following statements is correct regarding panic in emergency situations?",
		options: [
			"Panic improves focus during emergencies",
			"Panic helps others remain calm",
			"Panic wastes energy and impairs decision-making",
			"Panic boosts adrenaline, which is beneficial",
		],
		correct: 2,
	},
	{
		question:
			"True or False: Lifejackets are designed to turn an unconscious person face-up in the water.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"When donning a lifejacket, which of the following should be done first?",
		options: [
			"Fasten the waist straps",
			"Put your arms through the armholes",
			"Check the whistle and light",
			"Place the head through the lifejacket hole",
		],
		correct: 3,
	},
	{
		question:
			"What is the main difference between a lifejacket and an immersion suit?",
		options: [
			"Lifejackets provide flotation; immersion suits provide thermal protection",
			"Lifejackets are larger",
			"Immersion suits are used only on small vessels",
			"Lifejackets are for cold water only",
		],
		correct: 0,
	},
	{
		question:
			"True or False: It is safe to jump into the water with a lifejacket from a height greater than 6 meters.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"How should you use water fog to fight a fire in a confined space?",
		options: [
			"Attack directly at the base",
			"Form a water shield with low-velocity fog",
			"Spray high-velocity fog directly at the flames",
			"Spray in short bursts",
		],
		correct: 1,
	},
	{
		question: "What is a water fog applicator used for?",
		options: [
			"Extinguishing fires in electrical circuits",
			"Applying water at high velocity",
			"Extinguishing hidden fires and protecting against heat",
			"Creating chemical reactions to break the fire chain",
		],
		correct: 2,
	},
	{
		question: "Which of the following is a basic survival technique at sea?",
		options: [
			"Swim fast to conserve energy",
			"Panic to increase alertness",
			"Use the Heat Escape Lessening Posture (H.E.L.P.)",
			"Wait for rescue in a floating position",
		],
		correct: 2,
	},
	{
		question:
			"True or False: During a survival situation, it is important to remain calm to improve your chances of survival.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "Which class of fire involves electrical equipment?",
		options: ["Class A", "Class B", "Class C", "Class D"],
		correct: 2,
	},
	{
		question: "Which extinguisher is used to put out electrical fires?",
		options: ["Water", "Foam", "CO2", "Dry chemical powder"],
		correct: 2,
	},
	{
		question: "What is the first step in using a fire extinguisher?",
		options: [
			"Aim at the flames",
			"Squeeze the handle",
			"Pull the pin",
			"Sweep the nozzle",
		],
		correct: 2,
	},
	{
		question:
			"Which type of fire extinguisher should NOT be used on electrical fires?",
		options: ["CO2", "Water", "Dry powder", "Foam"],
		correct: 1,
	},
	{
		question: "How often should fire drills be conducted on ships?",
		options: ["Every day", "Once a week", "Once a month", "Twice a month"],
		correct: 1,
	},
	{
		question:
			"True or False: Fire extinguishers must be refilled after every use.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"What is the correct order of actions in case of a fire on a ship?",
		options: [
			"Sound the alarm, fight the fire, evacuate",
			"Evacuate, sound the alarm, fight the fire",
			"Fight the fire, evacuate, sound the alarm",
			"Sound the alarm, evacuate, fight the fire",
		],
		correct: 0,
	},

	// Lifesaving equipment
	{
		question:
			"True or False: Lifejackets are designed to turn an unconscious person face-up in the water.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "How often should lifejackets be inspected on board?",
		options: ["Monthly", "Quarterly", "Annually", "Every 6 months"],
		correct: 0,
	},
	{
		question: "What is the maximum capacity of a standard lifeboat?",
		options: ["25 people", "30 people", "35 people", "50 people"],
		correct: 1,
	},
	{
		question: "What is the primary function of an immersion suit?",
		options: [
			"Provide warmth",
			"Increase visibility",
			"Provide flotation and thermal protection",
			"Protect against sharks",
		],
		correct: 2,
	},
	{
		question:
			"When jumping into the water from a height with a lifejacket, what should you do?",
		options: [
			"Jump feet first, hold the jacket tight",
			"Dive head first",
			"Swim immediately after the jump",
			"Throw the lifejacket into the water first",
		],
		correct: 0,
	},
	{
		question:
			"True or False: Immersion suits are required on all types of vessels.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"What equipment is required on a liferaft for signaling purposes?",
		options: ["Flares", "VHF Radio", "Flashlights", "Whistles"],
		correct: 0,
	},
	{
		question: "How many pyrotechnic signals are required in a lifeboat?",
		options: ["3", "6", "8", "12"],
		correct: 2,
	},
	{
		question: "How should a lifeboat be launched in rough seas?",
		options: [
			"Fast launch",
			"Slow, controlled launch",
			"Capsize the boat",
			"Wait for calm seas",
		],
		correct: 1,
	},
	{
		question:
			"How long should you wait to launch the lifeboat after abandoning ship?",
		options: [
			"Immediately",
			"15 minutes",
			"1 hour",
			"As soon as the area is clear of hazards",
		],
		correct: 3,
	},

	// Emergency procedures and survival techniques
	{
		question: "What is the 'Buddy System' used for in survival situations?",
		options: [
			"To increase survival chances by pairing up",
			"To decrease survival chances",
			"To locate food",
			"To fight off predators",
		],
		correct: 0,
	},
	{
		question: "How should you signal for help in a survival situation?",
		options: [
			"Use pyrotechnics",
			"Shout loudly",
			"Stay silent",
			"Create large movements in the water",
		],
		correct: 0,
	},
	{
		question:
			"What is the best posture for conserving body heat in cold water?",
		options: [
			"HELP posture",
			"Floating posture",
			"Swimming posture",
			"Treading water posture",
		],
		correct: 0,
	},
	{
		question: "What should you do if your lifeboat capsizes?",
		options: [
			"Panic and swim away",
			"Stay calm and right the boat",
			"Abandon the boat",
			"Wait for rescue",
		],
		correct: 1,
	},
	{
		question: "What is the key to surviving in cold water?",
		options: [
			"Swim to stay warm",
			"Panic to generate heat",
			"Stay still to conserve energy",
			"Remove layers of clothing",
		],
		correct: 2,
	},
	{
		question:
			"True or False: It is important to ration water carefully in a survival situation.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "What is the first priority after abandoning ship?",
		options: [
			"Gather food",
			"Stay calm and find the liferaft",
			"Swim toward land",
			"Find other survivors",
		],
		correct: 1,
	},
	{
		question:
			"What should you do if you are alone in the water without a lifejacket?",
		options: [
			"Swim to conserve energy",
			"Tread water until rescued",
			"Panic",
			"Float on your back to conserve energy",
		],
		correct: 3,
	},

	// Additional questions related to general safety onboard
	{
		question:
			"Which type of fire involves combustible metals like magnesium or titanium?",
		options: ["Class A", "Class B", "Class C", "Class D"],
		correct: 3,
	},
	{
		question:
			"True or False: Fire hoses should be inspected weekly on board a vessel.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "Which is a common cause of onboard fires?",
		options: [
			"Overloaded electrical circuits",
			"Water leaks",
			"Wearing lifejackets",
			"Lack of ventilation",
		],
		correct: 0,
	},
	{
		question: "What is the primary function of a fire door on board?",
		options: [
			"To stop drafts",
			"To allow smoke to escape",
			"To contain fire",
			"To prevent people from exiting",
		],
		correct: 2,
	},
	{
		question: "How often should firefighting equipment be inspected?",
		options: ["Daily", "Weekly", "Monthly", "Annually"],
		correct: 2,
	},
	{
		question:
			"True or False: Regular fire drills are essential for crew preparedness.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "What should you do if you discover a fire in an engine room?",
		options: [
			"Raise the alarm immediately",
			"Enter the engine room to fight the fire",
			"Turn off the alarms",
			"Wait for instructions",
		],
		correct: 0,
	},
	// Add 145 more questions based on the PDF content
	{
		question:
			"What is the recommended minimum temperature for an immersion suit to prevent hypothermia in cold water?",
		options: ["10°C", "15°C", "0°C", "-2°C"],
		correct: 2,
	},
	{
		question: "What is the primary function of a life raft?",
		options: [
			"Provide flotation",
			"Provide protection from the sun",
			"Serve as a storage facility",
			"Enable faster swimming",
		],
		correct: 0,
	},
	{
		question: "Which of the following is a signal for distress at sea?",
		options: [
			"Waving arms",
			"Three blasts on a whistle",
			"Firing red flares",
			"Using hand signals",
		],
		correct: 2,
	},
	{
		question:
			"How long can a fire extinguisher typically last when used continuously?",
		options: ["20 seconds", "30 seconds", "1 minute", "2 minutes"],
		correct: 1,
	},
	{
		question: "What color are distress flares?",
		options: ["Green", "Blue", "Red", "White"],
		correct: 2,
	},
	{
		question:
			"What is the main purpose of the pyrotechnics found in a lifeboat?",
		options: [
			"Provide warmth",
			"Attract attention",
			"Illuminate surroundings",
			"Mark location",
		],
		correct: 1,
	},
	{
		question: "How often should the contents of a life raft be inspected?",
		options: ["Annually", "Every 2 years", "Monthly", "Every 5 years"],
		correct: 0,
	},
	{
		question:
			"What should be your first priority in the event of an abandon ship order?",
		options: [
			"Collect valuables",
			"Gather life-saving appliances",
			"Wait for rescue",
			"Securely fasten lifejackets",
		],
		correct: 3,
	},
	{
		question: "What is the maximum interval between fire drills on a ship?",
		options: [
			"Once a week",
			"Once every 2 months",
			"Once a month",
			"Every 6 months",
		],
		correct: 2,
	},
	{
		question: "What is the maximum number of people allowed on a life raft?",
		options: ["6", "12", "25", "50"],
		correct: 2,
	},
	{
		question: "Which safety signal indicates a man overboard?",
		options: [
			"Continuous sounding of the ship's horn",
			"Three long blasts",
			"One short blast",
			"One prolonged blast followed by two short blasts",
		],
		correct: 3,
	},
	{
		question:
			"What color are life-saving appliances typically painted to increase visibility?",
		options: ["Red", "Orange", "Blue", "Green"],
		correct: 1,
	},
	{
		question:
			"What is the standard frequency for inspecting a ship's fire extinguisher?",
		options: ["Every 6 months", "Annually", "Every 2 years", "Quarterly"],
		correct: 1,
	},
	{
		question:
			"True or False: The fireman’s outfit must be readily accessible on all vessels at all times.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"What is the primary advantage of using foam to extinguish fires?",
		options: [
			"Cools the fire rapidly",
			"Smothers the flames",
			"Displaces oxygen",
			"Absorbs the fuel",
		],
		correct: 1,
	},
	{
		question: "How should a fire hose be deployed during a fire drill?",
		options: ["Laid flat", "Fully extended", "Coiled tightly", "Rolled up"],
		correct: 1,
	},
	{
		question: "What is the main objective of firefighting on board a ship?",
		options: [
			"To protect property",
			"To control and extinguish the fire",
			"To protect cargo",
			"To alert other ships",
		],
		correct: 1,
	},
	{
		question:
			"What is the recommended frequency for testing life-saving equipment?",
		options: ["Monthly", "Weekly", "Every 2 years", "Quarterly"],
		correct: 0,
	},
	{
		question:
			"What should you do if the fire hose nozzle is blocked during firefighting?",
		options: [
			"Continue spraying",
			"Stop and clear the blockage",
			"Switch to another nozzle",
			"Reduce water pressure",
		],
		correct: 1,
	},
	{
		question:
			"What should you do if you hear the abandon ship signal while sleeping?",
		options: [
			"Stay in bed",
			"Head to your muster station",
			"Call for assistance",
			"Ignore the signal",
		],
		correct: 1,
	},
	{
		question: "What is the purpose of a distress signal?",
		options: [
			"To communicate with other ships",
			"To attract the attention of rescuers",
			"To indicate a crew member's position",
			"To notify passengers of a storm",
		],
		correct: 1,
	},
	{
		question:
			"What safety precaution should be taken before launching a lifeboat?",
		options: [
			"Ensure lifeboat engines are off",
			"Check for clear water under the lifeboat",
			"Make sure all passengers are wearing seatbelts",
			"Confirm that all lifejackets are stowed",
		],
		correct: 1,
	},
	{
		question: "Which type of fire involves combustible metals?",
		options: ["Class A", "Class B", "Class C", "Class D"],
		correct: 3,
	},
	{
		question:
			"Which action should be taken first in the event of an engine room fire?",
		options: [
			"Stop the engine",
			"Raise the alarm",
			"Ventilate the area",
			"Evacuate the ship",
		],
		correct: 1,
	},
	{
		question:
			"Which type of life-saving equipment should be used in rough seas?",
		options: ["Lifejacket", "Life raft", "Rescue boat", "Immersion suit"],
		correct: 1,
	},
	{
		question:
			"What should you do if your immersion suit gets punctured in cold water?",
		options: [
			"Panic",
			"Exit the water immediately",
			"Use duct tape to seal the puncture",
			"Stay calm and plug the hole if possible",
		],
		correct: 3,
	},
	{
		question:
			"What is the maximum recommended height for jumping into water while wearing an immersion suit?",
		options: ["1 meter", "4.5 meters", "3 meters", "6 meters"],
		correct: 1,
	},
	{
		question: "What is the purpose of a fire blanket in firefighting?",
		options: [
			"Smother small fires",
			"Absorb heat",
			"Prevent burns",
			"Block smoke",
		],
		correct: 0,
	},
	{
		question:
			"True or False: A CO2 fire extinguisher is suitable for electrical fires.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"What is the purpose of the 'buddy system' in personal survival techniques?",
		options: [
			"To locate food",
			"To conserve energy",
			"To ensure safety and assistance",
			"To improve visibility",
		],
		correct: 2,
	},
	{
		question:
			"True or False: Lifejackets must be equipped with a light and a whistle.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"What type of fire extinguisher is most suitable for extinguishing oil fires?",
		options: ["Water", "CO2", "Foam", "Powder"],
		correct: 2,
	},
	{
		question: "What does 'abandon ship' mean?",
		options: [
			"Leave the ship immediately",
			"Secure all hatches",
			"Launch all lifeboats",
			"Return to shore",
		],
		correct: 0,
	},
	{
		question: "Which of the following signals is used to indicate distress?",
		options: [
			"Waving a flag",
			"Three blasts on a horn",
			"Continuous sounding of a whistle",
			"Firing a red flare",
		],
		correct: 3,
	},
	{
		question: "What should you do when you see the abandon ship signal?",
		options: [
			"Ignore it",
			"Wait for more information",
			"Go to your muster station",
			"Jump overboard",
		],
		correct: 2,
	},
	{
		question:
			"What should be the main focus when using a fire extinguisher on a fire?",
		options: [
			"Aim at the flames",
			"Aim at the base of the fire",
			"Spray above the fire",
			"Spray on the sides",
		],
		correct: 1,
	},
	{
		question: "What is the purpose of the 'Fire Control Plan' on a ship?",
		options: [
			"To guide firefighting efforts",
			"To provide evacuation routes",
			"To identify emergency exits",
			"To prevent fire outbreaks",
		],
		correct: 0,
	},
	{
		question: "How often must fire extinguishers be inspected on board?",
		options: ["Daily", "Weekly", "Monthly", "Annually"],
		correct: 3,
	},
	{
		question: "What is the best way to conserve energy if stranded at sea?",
		options: [
			"Swim continuously",
			"Stay still in the water",
			"Shout for help",
			"Paddle slowly",
		],
		correct: 1,
	},
	{
		question:
			"What should you do if your lifejacket is not inflating properly?",
		options: [
			"Panic",
			"Swim to shore",
			"Blow into the manual inflation tube",
			"Remove the lifejacket",
		],
		correct: 2,
	},
	{
		question:
			"What should you do when you find yourself in rough seas in a life raft?",
		options: [
			"Stay inside and secure yourself",
			"Jump out and swim",
			"Open all hatches",
			"Paddle to shore immediately",
		],
		correct: 0,
	},
	{
		question: "What is the primary danger of hypothermia in cold water?",
		options: [
			"Loss of consciousness",
			"Dehydration",
			"Heat stroke",
			"Increased heart rate",
		],
		correct: 0,
	},
	{
		question: "What should you do if you see someone fall overboard?",
		options: [
			"Raise the alarm and throw a life buoy",
			"Jump in after them",
			"Ignore it",
			"Call for assistance",
		],
		correct: 0,
	},
	{
		question: "What is the purpose of a life buoy?",
		options: [
			"Provide additional flotation",
			"Attract attention",
			"Mark a safe location",
			"Serve as a towing device",
		],
		correct: 0,
	},
	{
		question: "What does the abbreviation SOLAS stand for?",
		options: [
			"Safety of Life at Sea",
			"Save Our Lives at Sea",
			"Safety of Lifeboats at Sea",
			"Secure Our Lives and Safety",
		],
		correct: 0,
	},
	{
		question: "What should you do if a fire breaks out in the galley?",
		options: [
			"Raise the alarm and use a fire extinguisher",
			"Throw water on the fire",
			"Shut off ventilation",
			"Run to the nearest exit",
		],
		correct: 0,
	},
	{
		question:
			"True or False: Water fog is effective for extinguishing electrical fires.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"What is the most important action when you discover a fire on a ship?",
		options: [
			"Raise the alarm",
			"Fight the fire",
			"Evacuate the area",
			"Close all doors",
		],
		correct: 0,
	},
	{
		question: "How often should lifejackets be inspected on board a ship?",
		options: ["Every month", "Every 6 months", "Every year", "Every 2 years"],
		correct: 0,
	},
	{
		question:
			"Which of the following fire extinguishers is best suited for flammable liquid fires?",
		options: [
			"Water extinguisher",
			"CO2 extinguisher",
			"Foam extinguisher",
			"Powder extinguisher",
		],
		correct: 2,
	},
	{
		question:
			"True or False: Lifeboats should be launched once a week for drills.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"What is the minimum time a lifeboat must be capable of floating in stormy seas?",
		options: ["12 hours", "24 hours", "48 hours", "72 hours"],
		correct: 3,
	},
	{
		question: "How often should the crew conduct abandon ship drills?",
		options: ["Every week", "Every 3 months", "Every month", "Every 6 months"],
		correct: 2,
	},
	{
		question: "What is the standard signal for abandon ship?",
		options: [
			"Continuous blast of the ship’s horn",
			"One short and two long blasts",
			"Seven short blasts followed by one long blast",
			"Three long blasts on the whistle",
		],
		correct: 2,
	},
	{
		question: "Which class of fire involves flammable metals?",
		options: ["Class A", "Class B", "Class C", "Class D"],
		correct: 3,
	},
	{
		question: "What color are distress flares required to be?",
		options: ["Blue", "Green", "Red", "White"],
		correct: 2,
	},
	{
		question:
			"True or False: A CO2 extinguisher is effective for all types of fires.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"How often should immersion suits be inspected for damage or defects?",
		options: ["Every month", "Every 6 months", "Every year", "Every 2 years"],
		correct: 0,
	},
	{
		question:
			"Which of the following is NOT a method of signaling for help at sea?",
		options: [
			"Firing a red flare",
			"Waving arms",
			"Continuous whistle blasts",
			"Lighting a green flare",
		],
		correct: 3,
	},
	{
		question: "What is the purpose of a muster list on a ship?",
		options: [
			"Assign lifeboat positions",
			"List emergency contacts",
			"Record daily tasks",
			"Provide crew duties in emergencies",
		],
		correct: 3,
	},
	{
		question:
			"Which of the following is the recommended action when approaching rough seas in a lifeboat?",
		options: [
			"Paddle as fast as possible",
			"Stay inside the lifeboat and secure yourself",
			"Abandon the lifeboat",
			"Signal for assistance",
		],
		correct: 1,
	},
	{
		question:
			"True or False: All ships must carry an emergency position indicating radio beacon (EPIRB).",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"Which device is used to mark a person’s position in the water during a man overboard situation?",
		options: [
			"Life raft",
			"Life buoy with light and smoke signal",
			"Flares",
			"EPIRB",
		],
		correct: 1,
	},
	{
		question: "What is the primary use of a thermal protective aid (TPA)?",
		options: [
			"To provide flotation",
			"To protect against hypothermia",
			"To signal for help",
			"To improve visibility at night",
		],
		correct: 1,
	},
	{
		question: "How often should fire alarms be tested on board?",
		options: ["Every week", "Every month", "Every 3 months", "Every 6 months"],
		correct: 0,
	},
	{
		question:
			"Which of the following is a SOLAS regulation regarding lifeboats?",
		options: [
			"Lifeboats must be inspected annually",
			"Lifeboats must carry a minimum of 8 flares",
			"Lifeboats must be able to hold at least 20 passengers",
			"Lifeboats must be painted in high visibility colors",
		],
		correct: 3,
	},
	{
		question: "What is the purpose of a lifeline on a life raft?",
		options: [
			"For mooring",
			"For attaching to another boat",
			"To prevent passengers from falling overboard",
			"To signal for help",
		],
		correct: 2,
	},
	{
		question:
			"True or False: Fire dampers on a ship must be kept open during firefighting operations.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"How should you activate a distress signal when stranded in a lifeboat?",
		options: [
			"Fire a red flare",
			"Wave a blue flag",
			"Use the ship’s horn",
			"Paddle towards the nearest vessel",
		],
		correct: 0,
	},
	{
		question:
			"What is the best method to conserve heat when in cold water without a survival suit?",
		options: [
			"Tread water",
			"Swim to generate heat",
			"Adopt the HELP posture",
			"Float on your back",
		],
		correct: 2,
	},
	{
		question:
			"True or False: Foam extinguishers can be used to fight electrical fires.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"Which of the following equipment is essential for signaling in lifeboats?",
		options: ["Lifebuoy", "Flares", "Paddle", "Water container"],
		correct: 1,
	},
	{
		question: "What is the first step in launching a life raft?",
		options: [
			"Inflate the raft",
			"Throw the raft overboard",
			"Secure the painter line",
			"Check the water for debris",
		],
		correct: 2,
	},
	{
		question:
			"True or False: The International Convention for the Safety of Life at Sea (SOLAS) requires vessels to carry immersion suits.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"Which of the following signals is used to alert the crew to muster at their stations?",
		options: [
			"One long blast",
			"Three short blasts",
			"Seven short blasts followed by one long blast",
			"Five short blasts",
		],
		correct: 2,
	},
	{
		question:
			"What is the minimum number of lifebuoys required on a cargo ship?",
		options: ["2", "4", "8", "12"],
		correct: 2,
	},
	{
		question:
			"True or False: Lifeboats must carry a sufficient amount of food and water for 72 hours.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"Which type of fire extinguisher should NOT be used on a cooking oil fire?",
		options: [
			"Water extinguisher",
			"Foam extinguisher",
			"CO2 extinguisher",
			"Dry powder extinguisher",
		],
		correct: 0,
	},
	{
		question: "How often must immersion suits be serviced?",
		options: ["Every 6 months", "Every year", "Every 2 years", "Every 5 years"],
		correct: 1,
	},
	{
		question:
			"What is the primary reason to keep a fire door closed on a ship?",
		options: [
			"To keep crew members inside",
			"To trap the fire in one area",
			"To let heat escape",
			"To allow crew to pass through easily",
		],
		correct: 1,
	},
	{
		question:
			"Which of the following types of equipment must be included in a lifeboat?",
		options: [
			"Medical kit",
			"Spare oars",
			"Pyrotechnic signals",
			"Waterproof clothing",
		],
		correct: 2,
	},
	{
		question:
			"True or False: It is important to check the air supply on a Self-Contained Breathing Apparatus (SCBA) before entering a smoke-filled room.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question:
			"How often should drills for fire and abandon ship be held according to SOLAS?",
		options: [
			"Every month",
			"Every 2 months",
			"Every 3 months",
			"Every 6 months",
		],
		correct: 0,
	},
	{
		question:
			"What should you do if you see smoke coming from the engine room?",
		options: [
			"Open the door to check",
			"Alert the crew and raise the alarm",
			"Try to put out the fire yourself",
			"Ignore it",
		],
		correct: 1,
	},
	{
		question:
			"True or False: Fire alarms must be tested every 2 weeks on board a vessel.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question:
			"Which action is recommended during a fire drill on board a vessel?",
		options: [
			"Continue with daily tasks",
			"Assemble at the muster station",
			"Turn off all alarms",
			"Ignore the signal",
		],
		correct: 1,
	},
	{
		question: "Which of the following best describes the role of a liferaft?",
		options: [
			"Provide food and water",
			"Serve as a storage area",
			"Provide a safe means of escape in an emergency",
			"Enable communication with other vessels",
		],
		correct: 2,
	},
	{
		question: "What color is a fire extinguisher used for electrical fires?",
		options: ["Red", "Black", "Blue", "Yellow"],
		correct: 1,
	},
	{
		question:
			"How often should a ship’s Emergency Position Indicating Radio Beacon (EPIRB) be tested?",
		options: ["Monthly", "Every 3 months", "Annually", "Every 6 months"],
		correct: 2,
	},
	{
		question:
			"Which of the following pieces of equipment is vital in a survival situation at sea?",
		options: [
			"Radio",
			"Distress signals",
			"Fire extinguishers",
			"Ballast tanks",
		],
		correct: 1,
	},
	{
		question:
			"What should you do first if you discover a fire in a storage area?",
		options: [
			"Close all doors",
			"Raise the alarm",
			"Fight the fire",
			"Ventilate the room",
		],
		correct: 1,
	},
	{
		question:
			"True or False: A liferaft should be inflated on board before lowering it into the water.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question: "How should you proceed after donning an immersion suit?",
		options: [
			"Jump into the water",
			"Wait for instructions from the captain",
			"Check the fit and securely fasten all zippers",
			"Remove the suit after five minutes",
		],
		correct: 2,
	},
];
