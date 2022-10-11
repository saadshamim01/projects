

SELECT skills.id, question_skills.question_id, question_skills.created_at='2020'
FROM skills
WHERE active = 1

# NSVentures

## Cloud9

- Run development environment on a managed Amazon EC2 instance or any existing Linux server that supports SSH. 
- Users can write, run, and debug applications with just a browser, without needing to install or maintain a local IDE. 
- Code editor and integrated debugger include helpful, time-saving features such as code hinting, code completion, and step-through debugging. 
- The Cloud9 terminal provides a browser-based shell experience enabling you to install additional software, do a git push, or enter commands.

Amazon Web Services (AWS) is a comprehensive cloud computing platform that includes infrastructure as a service (IaaS) and platform as a service (PaaS) offerings. AWS services offer scalable solutions for compute, storage, databases, analytics, and more.

Installing Cloud9 IDE on EC2 instance https://medium.com/@jeffcogswell/installing-cloud9-ide-on-an-aws-ec2-instance-b327f8683035

## Crypotcurrency

Its a virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. 

Decentralized based on blockchain technology - a [distributed ledger](https://www.investopedia.com/terms/d/distributed-ledgers.asp) enforced by a disparate network of computers.



The framework I am proposing is based on the notion of **Single Source of Truth Systems** (SSoTSs). I define SSoTS as a **cohesive digital infrastructure that can be relied upon, with clear guarantees of availability, to maintain a consistent and truthful view of some commercial, real world, or social state, collectively termed “critical data”**.

The most important takehome is that tokens are not equity, but are more similar to paid API keys. Nevertheless, they may represent a >1000X improvement in the time-to-liquidity and a >100X improvement in the size of the buyer base relative to traditional means for US technology financing — like a Kickstarter on steroids. This in turn opens up the space for funding new kinds of projects previously off-limits to venture capital, including open source protocols and projects with fast 2X return potential.



Add in the excel file

```
BBC
CNN
worldwidenewsnetwork
newyorktimes
fox news
msnbc
News Corp.
The New York Times Company
Daily Mail and General Trust plc
Sinclair Broadcasting Co.
E. W. Scripps
Tribune Media Co.
Daily Journal Corporation
Gannett Co. Inc.
The McClatchy Company
A. H. Belo Corporation
```



### Stats

- In 2011, the cryptocurrency market was only worth $10 million. The cryptocurrency market in 2021 is worth over $2.2 trillion.
- More than 15,000 cryptocurrencies, according tocoinmarketcap.com

*Crypto can be classified into different categories, like DeFi, NFT, utility tokens, store of value tokens like bitcoin and litecoin, and yield farming tokens like Aave

Based on their utility, we have broadly categorised cryptocurrencies into four types:

- #### Currency

  The aim was to make cross-border payment transactions cheaper and faster.

  Crypto(s) can be used on any public decentralized blockchain.

  Etherium has Ether, Solana Blockchain has Sol and so on.

- #### Asset

  Stablecoins can be categorised as assets as the value of these cryptocurrencies is derived from the value of an external asset. Now due to the availability of stablecoins, they could choose to remain in the crypto ecosystem by exchanging their cryptocurrency for a more stable crypto while they decide on the next preferable choice.

- #### Object

  Future of blockchains

  Aimed for solving world problems like decententralised net that is cheaper

  Sia is the leading decentralized cloud storage platform.

  Decentraland, which is an Ethereum-based application where users can buy virtual land (NFT-based) using its cryptocurrency (MANA).

  Charlie Lee (Google Engineer) Litecoin is based on an open-source global payment network that is not controlled by any central authority, Many similarities between LiteCoin and Bitcoin but different in terms of aspects like faster block generation rate and use of Scrypt as a proof of work scheme.



## General

Numpy:

Library used for working with arrays. 

Python list can contain different data but NumPy array should be homogeneous, otherwise inefficient.

It also has functions for working in domain of linear algebra, fourier transform, and matrices. 

NumPy arrays are faster and more compact than Python lists. An array consumes less memory and is convenient to use.

```
s = [1,2,3]
y = [[2,3,4],[2,1,3]]
type(s)
>>>> list

List to array
s_array = np.array(s)
>>>>numpy.ndarray

Shape
s_array.shape
>>>>(,3)

y_array.shape
>>>>(2,3)



```



## Machine Learning

RNN Playbook

https://towardsdatascience.com/recurrent-neural-networks-by-example-in-python-ffd204f99470#:~:text=A%20RNN%20is%20designed%20to,but%20then%20was%20terribly%20exciting.%E2%80%9D

LSTM

*Just keep in mind what the LSTM cell is meant to do: allow past information to be reinjected at a later time.*

RNN

At a high level, a[ recurrent neural network](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) (RNN) processes sequences — whether daily stock prices, sentences, or sensor measurements — one element at a time while retaining a *memory* (called a state) of what has come previously in the sequence.

*Recurrent* means the output at the current time step becomes the input to the next time step. At each element of the sequence, the model considers not just the current input, but what it remembers about the preceding elements.

This memory allows the network to learn *long-term dependencies* in a sequence which means it can take the entire context into account when making a prediction, whether that be the next word in a sentence, a sentiment classification, or the next temperature measurement. A RNN is designed to mimic the human way of processing sequences: we consider the *entire sentence when forming a response instead of words by themselves.* For example, consider the following sentence.

The LSTM has 3 different gates and weight vectors: 

- a “forget” gate for discarding irrelevant information
- an “input” gate for handling the current input 
- “output” gate for producing predictions at each time step

https://towardsdatascience.com/recurrent-neural-networks-by-example-in-python-ffd204f99470#:~:text=A%20RNN%20is%20designed%20to,but%20then%20was%20terribly%20exciting.%E2%80%9D

- https://towardsdatascience.com/a-complete-step-by-step-tutorial-on-sentiment-analysis-in-keras-and-tensorflow-ea420cc8913f
- https://towardsdatascience.com/nyt-sentiment-analysis-with-tensorflow-7156d77e385e

Exploratory Analysis (SNSPlot, basic inspection)

- https://medium.com/@siddhardhan23/exploratory-data-analysis-25b7c0f0bfec

SageMaker

https://aws.amazon.com/comprehend/pricing/?p=pm&c=ml&pd=sm&z=4

Panda Cheetsheet

https://www.datacamp.com/community/blog/python-pandas-cheat-sheet?utm_source=adwords_ppc&utm_medium=cpc&utm_campaignid=1655852085&utm_adgroupid=77088685371&utm_device=c&utm_keyword=pandas%20cheat%20sheet&utm_matchtype=p&utm_network=g&utm_adpostion=&utm_creative=353755544529&utm_targetid=kwd-436958787965&utm_loc_interest_ms=&utm_loc_physical_ms=1000013&gclid=Cj0KCQiAubmPBhCyARIsAJWNpiNjYw3unw2FOJi0tvYwJ7k07NKliQbmSv-HLbc40zCPs-FYPZ9ly_caAkAqEALw_wcB

Web Scraping

Edureka https://www.edureka.co/blog/web-scraping-with-python/

Sentinel Analysis on Stock Data https://towardsdatascience.com/sentiment-analysis-of-stocks-from-financial-news-using-python-82ebdcefb638

Selenium Testing

https://chercher.tech/python/assertion-unittest-python-selenium

### Layers

#### TextVectorization

https://www.tensorflow.org/api_docs/python/tf/keras/layers/TextVectorization

A preprocessing layer which maps text features to integer sequences.

The processing of each example contains the following steps:

1. Standardize each example (usually lowercasing + punctuation stripping)
2. Split each example into substrings (usually words)
3. Recombine substrings into tokens (usually ngrams)
4. Index tokens (associate a unique int value with each token)
5. Transform each example using this index, either into a vector of ints or a dense float vector.

### Problems

Data Collection

- Which tool to use?
- Do I need crypto website or general websites (because stocks are effected by world news aswell.)

Training

Problems

- How to tag each sentence? Do I need even need to tag individual data
- Find if pre existing library is present.

Others

Covid in area using AWS Lambda: https://towardsdatascience.com/5-minutes-to-create-an-aws-lambda-function-to-stay-updated-about-covid-19-in-your-area-88a4abe77a04











