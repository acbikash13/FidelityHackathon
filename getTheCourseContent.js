const OpenAI = require("openai");
require('dotenv').config();

OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);
const openai = new OpenAI();
//  can you give me 3 lesson and 3 quesitons based on the contntes
//  below for kids from kindergarten to grade 2
//  response  should be in json format and values should include
//  lesson title
//  lesson content
//  lesson questions and a chdild object of
// question and answer.
//  json.
 
 
async function getTheCourseContent() {
        promptHeading = `We are developing an online course aimed at teaching financial literacy to children in grades K-2. The primary goal of our course is to equip kids with essential knowledge and skills to manage money wisely. We need your help to generate content for our course. Specifically, we're looking to create educational materials structured as follows: 1. **Concept:** Introduce a key concept related to financial literacy or money management. This concept should be explained in a simple and engaging manner suitable for young learners. 2. **Question:** Develop a question that assesses the understanding of the concept introduced in the previous section. The question should test comprehension and critical thinking skills. 3. **Multiple Choice Questions (MCQ):** Provide four multiple-choice questions related to the concept discussed earlier. These questions should offer options for students to choose the correct answer, encouraging active participation and reinforcement of learning. Please refer to the passage provided below to generate content for the concepts. Please generate as much concepts as possible. Wew want this in a very specific format shown below. Please do not include anything other than the format below:
        [
            {Concept1: 'This is the first concept of the course. PLease include a detailed description of the that     particular lesson or concept here.',
             Concept2: 'This is the first concept of the course.PLease include a detailed description of the that particular lesson or concept here.',
             Concept3: 'This is the first concept of the course.PLease include a detailed description of the that particular lesson or concept here.',
             Concept4: 'This is the first concept of the course. PLease include a detailed description of the that     particular lesson or concept here.',
             Concept5: 'This is the first concept of the course.PLease include a detailed description of the that particular lesson or concept here.',
             Concept6: 'This is the first concept of the course.PLease include a detailed description of the that particular lesson or concept here.'
            },
            {
                quetionsForLearning1: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                },
                quetionsForLearning2: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                },
                quetionsForLearning3: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                },
                quetionsForLearning4: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                },
                quetionsForLearning5: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                },
                quetionsForLearning6: {
                    question: 'What is the first concept of the course?',
                    options :["option1", "option2", "option3", "option4"],
                    answer: "option1"
                }
            }
        ]
        ;`
        const completion = await openai.chat.completions.create({
            model: "gpt-4-1106-preview", // or another suitable model like gpt-4
            messages: [{
            role: "user",
            content: `${promptHeading}:Do you know people who handle money carelessly? Lots of seemingly smart people
            are clueless about where they stand financially. There is Beverly, a professional
            woman, who calls the bank every two or three months to find out what the balance
            is in her checking account. She has never reconciled her checking account, so she
            never knows what her balance is. What Beverly still hasn’t learned is that people at
            her bank don’t know what Bev’s real balance is either, because they don’t know
            what checks Beverly has written that have not yet been cleared by the bank. Only
            Beverly knows that. And then there is Ben. Ben actually believes that he can write
            checks as long as he has blank ones to be used. Ben has been heard to say, “Why
            would the bank give me blank checks if I’m not supposed to use them?”
            You don’t have to be like Ben and Bev. You can get on the fast track to wealth by
            becoming good at managing money. To manage your money well, you need to
            know some basic information, use some common sense, and then take action. We
            recommend three steps.
            First, get a grip on your spending. How
            can you do that? In the old-fashioned way.
            Set up a budget. Make a list of your income
            and expenses. Then subtract your expenses
            from your income. If you have any surplus
            cash, plan how you will use it. Do this each
            month. Maybe you will learn that now is the
            time to get started investing in a mutual
            fund or stock account.
            Second, get to know the various services
            offered by financial institutions in your
            community. Checking accounts are among
            the most common financial services people
            use, but there are many others including
            ATMs, online banking, direct deposits,
            savings accounts, credit cards, installment
            loans, student loans, retirement accounts,
            and certificates of deposit. Among the
            many types of financial institutions, four
            Introduction
            50 FINANCIAL FITNESS FOR LIFE: Student Workbook Grades 9-12 ©Council for Economic Education
            THEME
            3
            important ones are commercial banks, savings and loans, credit unions and brokerage firms. Open an account now at one or more financial institutions. Start with
            checking and savings accounts, but don’t wait long to start other, more rewarding
            savings programs. Becoming wealthy is within your grasp. Starting to save when you
            are young is a good idea.
            Finally, learn how to protect yourself against risk. All choices involve risk, but
            some risks are greater than others. Buying insurance is a common way to reduce
            risk. There are many kinds of insurance to consider including auto, health, renter’s,
            homeowner’s, life, and disability. The type and amount of insurance you need will
            change as you get older and the value of your assets increases.
            The best thing about these three tips and others covered in these lessons is that
            none of it is overly difficult. It might take some work, but you can learn this stuff.
            Your efforts now can have a big payoff later.
            FINANCIAL FITNESS FOR LIFE: Student Workbook Grades 9-12 ©Council for Economic Education 51
            EXERCISE
            8.1
            Radio Host Budget Bob
            Hello, financial health fans! Welcome to the nation’s newest financial advice show,
            Budgets Are Beautiful. This is the radio call-in show that lets you, the radio listener,
            get the latest advice on how to manage your family finances. Today our topic is how
            to improve your skills at managing your family’s finances. Our guest today is a sucessful family financial planner, Dr. Penny Saver. Dr. Saver has helped hundreds of
            families and has a Ph.D., M.A., and an S.U.V. Hello, Dr. Saver. Welcome to the show.
            Dr. Saver
            Hello Bob, and hello to all those people who are tuned in today. I am ready to take
            your questions.
            Budget Bob
            Here is our first caller: Connie from Connecticut. You’re on the air, Connie.
            Connie
            Hi, Dr. Saver. I am having a disagreement with my husband regarding the meaning
            of some financial vocabulary. He heard someone on another call-in show talking
            about how to spend disposable income. My husband laughed and said that all of
            our income is disposable. He said that we dispose of all our income by the end of
            every month. Sometimes we dispose of our income before the end of the month. I
            think he was joking, but could you tell me: What do financial planners mean by
            disposable income?
            Dr. Saver
            Actually, your husband was not too far off. Disposable income is the money that you
            have left to spend or save as you wish after you pay your taxes, Social Security, and
            the other deductions that have been taken out of your gross pay. It is sometimes
            called net income. While disposable income can be used in many ways, most families have important financial obligations. Rent, car payments, and food bills add up
            quickly, so tough choices need to be made.
            Budget Bob
            That sounds kind of gloomy, Dr. Saver. Do you have any advice for Connie and her
            husband on how to get better use out of their disposable income?
            Dr. Saver
            Financial planners suggest that setting up and sticking to a family budget is the first
            step toward financial success. I advise families to start by setting a monthly budget.
            NAME: _________________________________________ CLASS PERIOD: ____________
            Budgets Are Beautiful Call-In Show
            THEME 3 | Lesson 8: Managing Your Money
            52 FINANCIAL FITNESS FOR LIFE: Student Workbook Grades 9-12 ©Council for Economic Education
            EXERCISE
            8.1 THEME 3 | Lesson 8: Managing Your Money
            To do this, you make a list of your income and expenses. Under income, list all the
            money you anticipate earning for the year. For most people, most income will be
            what they earn from their jobs. If your income varies month to month, divide your
            annual income by 12 and use the answer for the monthly income in your budget.
            Then list your expenses. To help make sure your list of expenses is complete, look at
            last year’s bills, credit card statements, and bank records. To capture the amount
            you spend on items you buy with cash, keep track of your out-of-pocket spending
            for a month or two on a small tablet. After you’ve done all this, you will have a
            good idea of where your money goes each month. Common expenses are rent, car
            payments, insurance, groceries, and so forth. Don’t forget to list your savings
            amounts for each of your goals. If you wait to save what’s left at the end of the
            month, you will never begin saving.
            Now, subtract your expenses from your income. I hope that this is a positive number! If it is—if you have more income than expenses—then you have surplus cash
            that can be put to other uses. If, however, the number is negative, then you will
            need to cut your expenses, increase your income, or use some of your savings to
            get through the month.
            Budget Bob
            Here is our next caller: Calvin from California. You’re on the air, Cal.
            Calvin
            Hello Dr. Saver. Thanks for taking my call. My wife and I started to write a monthly
            budget and we learned right away that not all expenses are the same. Some seem to
            stay pretty much the same each month while others change. Do other people have
            this same situation? Can you comment on the different types of household expenses?
            Dr. Saver
            Great question! Families ordinarily have what we call fixed expenses and variable
            expenses. Fixed expenses are ones that are relatively constant each month. These
            are a family’s definite obligations such as a house payment, rent payment, car payment, and medical insurance. These expenses are hard to change in the short term,
            so we say they are “fixed.” Variable expenses are ones that are likely to change in
            the short term. Examples include telephone bills, groceries, medical bills not covered
            by insurance, entertainment, recreation, charge account purchases, and so forth.
            These are expenses over which you have more short-term control. Occasional
            expenses or periodic expenses are those that occur once or a few times a year.
            Personal property taxes, income taxes, car insurance, birthday gifts and holiday gifts
            are examples of expenses that get some people in trouble because they forget to
            plan for them.
            FINANCIAL FITNESS FOR LIFE: Student Workbook Grades 9-12 ©Council for Economic Education 53
            EXERCISE
            8.1 THEME 3 | Lesson 8: Managing Your Money
            Budget Bob
            Dr. Saver, I sometimes hear advisors say, “Pay yourself first.” In other words, set
            money aside from your disposable income to put into your savings plan. How does
            this idea of “pay yourself first” fit into the family’s expenses?
            Dr. Saver
            I tell my clients to include their savings goals in the fixed expenses part of their
            budget. I like this approach because it shows how important saving is to individual
            and family financial health. Under the saving part of the budget, a family or individual could list funds saved for emergencies, as well as other cash set aside for longterm savings and investments.
            Budget Bob
            Here is our next caller, Minnie from Minnesota. You’re on the air, Minnie.
            Minnie
            I just love this show, Dr. Saver. Here is my question. My sister Emily told me that she
            heard on television that people might have high incomes and still have a low net
            girth. What’s all this about net girth? Is it true that people who have high incomes
            are also thin?
            Dr. Saver
            Minnie, I think that you misunderstood your sister. I think she was referring to the
            idea of net worth, not net girth. Let me explain. People can have high incomes and
            still not be wealthy. When we measure wealth, we are measuring net worth. Here is
            how to figure your net worth. Net worth is determined by two factors. First, list your
            assets and their value. Assets are what a person owns, including the value of any
            savings, house, car, and personal possessions. Next, list your liabilities. Liabilities are
            the money you owe others such as payments on a home mortgage, car loan, credit
            card debt, college loans, and so forth. If your assets are greater than your liabilities,
            then you have a positive net worth. If your liabilities are greater than your assets,
            then you have a negative net worth. Individuals can have a large income and, because of their liabilities, still have a negative net worth.`,
            
            }],
            max_tokens: 1024, // Adjust based on how much content you need
            temperature: 0.2, // Lower temperature for more precise and deterministic output
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
    return await completion.choices[0].message.content;
}
module.exports = getTheCourseContent;

