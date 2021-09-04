Apache Hadoop is an open-source software framework for storage and large-scale processing of data-sets on clusters of commodity hardware.

Some of the characteristics:

- Open source 
-  Distributed processing 
-  Distributed storage 
- Reliable  
- Economical • Flexible

Hadoop Framework Modules 

The base Apache Hadoop framework is composed of the following modules: 

- Hadoop Common : contains libraries and utilities needed by other Hadoop module
- Hadoop Distributed File System (HDFS) : a distributed file-system that stores data on commodity machines, providing very high aggregate bandwidth across the cluster 
-  Hadoop YARN: a resource-management platform responsible for managing computing resources in clusters and using them for scheduling of users' applications 
-  Hadoop MapReduce:– an implementation of the MapReduce programming model for large scale data processing.

Storage

- HDFS
  - Horizontally scalable (Unlimited)
  - Block Size 128 MB

Process

MapReduce

Spark



Resources

https://www.slideshare.net/Simplilearn/12-components-of-hadoop-ecosystem/5?src=clipshare





- MRJob helps with the streaming
- class X(MRJob) means it inherits from MRJob

```python
from mrjob.job import MRJob
from mjob.step import MRStep

class RatingBreakdown(MRJob):
  
  def step (self):
    return [
    MRStep(mapper=self.mapper_get_ratings,
           reducer=self.reducer_count_rating)
    ]
  
  # Mapper
  def mapper_get_ratings(self, _, line):
    (userID, movieID, rating, timestamp) = line.split('\t')
    yield rating, 1

  # Reducer
  def reducer_count_ratings(self, key, values):
    yield key, sum(values)

if __name__=='__main__':
  RatingBreakdown.run()
```



Spark First Programme

```java
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;


public class Main {

	public static void main(String[] args) {

		List <Integer> inputData = new ArrayList<Integer>();
		
		inputData.add(35);
		inputData.add(32);
		inputData.add(12);
		inputData.add(65);
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<Integer> myRdd = sc.parallelize(inputData);
		
		
		Integer result = myRdd.reduce((value1, value2) -> value1 + value2 );
		
		JavaRDD<Double> sqrtRdd = myRdd.map(value -> Math.sqrt(value));
		
		sqrtRdd.foreach(value -> System.out.println(value));
		sqrtRdd.collect().forEach( System.out::println );
		
		//How many elements
		System.out.println(sqrtRdd.count());
		
		//Count using map & reduce
		JavaRDD<Long> singleIntegerRdd = sqrtRdd.map(value -> 1L);
		Long reduceSingle = singleIntegerRdd.reduce((value1, value2) -> value1 + value2);
		System.out.println(reduceSingle);
		
		System.out.println(result);
		sc.close();
		
	}
}

```



RDD

```
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;


public class Main {

	public static void main(String[] args) {

		List <Integer> inputData = new ArrayList<Integer>();
		
		inputData.add(35);
		inputData.add(32);
		inputData.add(12);
		inputData.add(65);
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<Integer> originalIntegers = sc.parallelize(inputData);
		JavaRDD<IntegerWithSquareRoot> sqrtRdd = originalIntegers.map(value -> new IntegerWithSquareRoot(value));
		
		// Instead of doing this we can use tuples
		//Tuple means collection of variable.("sad", "happy")
		
		
		sc.close();
	
		
	}

}

```

```java4
package com.virtualpairprogrammers;

public class IntegerWithSquareRoot {

	private int originalNumber;
	private double squareRoot;
	
	public IntegerWithSquareRoot(int i) {
		// TODO Auto-generated constructor stub
		this.originalNumber = i;
		this.squareRoot = Math.sqrt(originalNumber);	
	}
}
```

Tuples

```
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;

import scala.Tuple2;
import scala.Tuple5;


public class Main {

	public static void main(String[] args) {

		List <Integer> inputData = new ArrayList<Integer>();
		
		inputData.add(35);
		inputData.add(32);
		inputData.add(12);
		inputData.add(65);
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<Integer> originalIntegers = sc.parallelize(inputData);
		JavaRDD<Tuple2<Integer, Double>> sqrtRdd = originalIntegers.map(value -> new Tuple2<Integer, Double>(value, Math.sqrt(value)));
		
		
		// Instead of doing this we can use tuples
		//Tuple means collection of variable.("sad", "happy")
		
		Tuple2<Integer, Double> myValue = new Tuple2<Integer, Double>(9, 3.0);
		
		Tuple5<Integer,Integer,Integer,Integer,Integer> tup5 = new Tuple5<>(4,3,2,1,2);
		
		System.out.println(tup5);
		
		
		sc.close();	
	}
}
```

PairRDD

```
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;

import scala.Tuple2;



public class Main {

	public static void main(String[] args) {

		List <String> inputData = new ArrayList<>();
		
		inputData.add("WARN: Tuesday 4 September 0405");
		inputData.add("ERROR: Tuesday 4 September 0408");
		inputData.add("FATAL: Wednesday 5 September 1632");
		inputData.add("ERROR: Friday 7 September 1854");
		inputData.add("WARN: Saturday 8 September 1942");
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<String> originalLogMessages = sc.parallelize(inputData);
		
		//Will use RDD<Tupl2<String, String>> -> This will complicate
		//Spark has built in feature called PairRDD, 2 cols (key, value)
		//Looks to Java Map, but the key is repeating, its normal in java. 
		//PairRDD<String, String>
		
		JavaPairRDD<String, Long> pairRdd = originalLogMessages.mapToPair(rawValue -> {
			
			String[] columns = rawValue.split(":");
			String level = columns[0];
			String date = columns[1];
			
			return new Tuple2<>(level, 1L);
		
		} );
		
		JavaPairRDD<String, Long> sumRdd = pairRdd.reduceByKey((value1, value2) -> value1 + value2);
		
		sumRdd.foreach(tuple -> System.out.println(tuple._1+ " has " + tuple._2 + " instances."));
		
		
		sc.close();
		
	}
}

```

 Optimised RDD looks cleaner

```java
package com.virtualpairprogrammers;                                                                                                         
                                                                                                                                            
import java.util.ArrayList;                                                                                                                 
import java.util.List;                                                                                                                      
                                                                                                                                            
import org.apache.log4j.Level;                                                                                                              
import org.apache.log4j.Logger;                                                                                                             
import org.apache.spark.SparkConf;                                                                                                          
import org.apache.spark.api.java.JavaSparkContext;                                                                                          
                                                                                                                                            
import scala.Tuple2;                                                                                                                        
                                                                                                                                            
                                                                                                                                                                                                                                                                     
public class Main {                                                                                                                         
                                                                                                                                            
	public static void main(String[] args) {                                                                                                
                                                                                                                                            
		List <String> inputData = new ArrayList<>();                                                                                        
		                                                                                                                                    
		inputData.add("WARN: Tuesday 4 September 0405");                                                                                    
		inputData.add("ERROR: Tuesday 4 September 0408");                                                                                   
		inputData.add("FATAL: Wednesday 5 September 1632");                                                                                 
		inputData.add("ERROR: Friday 7 September 1854");                                                                                    
		inputData.add("WARN: Saturday 8 September 1942");                                                                                   
		                                                                                                                                    
		Logger.getLogger("org.apache").setLevel(Level.WARN);                                                                                
		                                                                                                                                    
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");                                                 
		JavaSparkContext sc = new JavaSparkContext(conf);                                                                                   
		                                                                                                                                    
		sc.parallelize(inputData)                                                                                                           
			.mapToPair(rawValue -> new Tuple2<>(rawValue.split(":")[0], 1L ))                                                               
			.reduceByKey((value1, value2) -> value1 + value2)                                                                               
			.foreach(tuple -> System.out.println(tuple._1+ " has " + tuple._2 + " instances."));     
    
    // Using Group by                                                                                                                            
		sc.parallelize(inputData)
			.mapToPair(rawValue -> new Tuple2<>(rawValue.split(":")[0], 1L))
			.groupByKey()
			.foreach(tuple -> System.out.println(tuple._1 + " has " + Iterables.size(tuple._2) + " instances"));
			
		                                                                                                                   
		sc.close();                                                                                                                         
		                                                                                                                                    
	}                                                                                                                                       
}                                                                                                                                           
                                                                                                                                            
```

FlatMap

```
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;



public class Main {

	public static void main(String[] args) {

		List <String> inputData = new ArrayList<>();
		
		inputData.add("WARN: Tuesday 4 September 0405");
		inputData.add("ERROR: Tuesday 4 September 0408");
		inputData.add("FATAL: Wednesday 5 September 1632");
		inputData.add("ERROR: Friday 7 September 1854");
		inputData.add("WARN: Saturday 8 September 1942");
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<String> sentences = sc.parallelize(inputData);
		
		JavaRDD<String> words = sentences.flatMap(value -> Arrays.asList(value.split(" ")).iterator());
		
		words.collect().forEach( System.out::println );
		
 
		sc.close();
		
	}
}
```

Filtered

```java
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;



public class Main {

	public static void main(String[] args) {

		List <String> inputData = new ArrayList<>();
		
		inputData.add("WARN: Tuesday 4 September 0405");
		inputData.add("ERROR: Tuesday 4 September 0408");
		inputData.add("FATAL: Wednesday 5 September 1632");
		inputData.add("ERROR: Friday 7 September 1854");
		inputData.add("WARN: Saturday 8 September 1942");
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<String> sentences = sc.parallelize(inputData);
		
		JavaRDD<String> words = sentences.flatMap(value -> Arrays.asList(value.split(" ")).iterator());
		
		JavaRDD<String> filteredWords = words.filter(word -> word.length() > 1);
		
		filteredWords.collect().forEach( System.out::println );
		
		//Optimised
		JavaRDD<String> filteredWordOptimised = sc.parallelize(inputData)
				.flatMap(value -> Arrays.asList(value.split(" ")).iterator())
				.filter(word -> word.length() > 1);
		
		filteredWordOptimised.collect().forEach(System.out::println);
 
		sc.close();
		
	}
}
```

File to word rank

```java
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;

import scala.Tuple2;



public class Main {

	public static void main(String[] args) {

		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		JavaRDD<String> initialRdd = sc.textFile("src/main/resources/subtitles/input.txt");
		

		JavaRDD<String> lettersOnlyRdd = initialRdd.map(sentence -> sentence.replaceAll("[^a-zA-Z\\s]", "").toLowerCase());
		
		JavaRDD<String> removedBlankLines = lettersOnlyRdd.filter(sentence -> sentence.trim().length() > 0);
		
		JavaRDD<String> justWords = removedBlankLines.flatMap(sentence -> Arrays.asList(sentence.split(" ")).iterator());
		
		JavaRDD<String> blankWordsRemoved = justWords.filter(word -> word.trim().length() > 0);
		
		JavaRDD<String>  justInterestingWords = blankWordsRemoved.filter(word -> Util.isNotBoring(word));
		
		JavaPairRDD<String, Long> pairRdd = justInterestingWords.mapToPair(word -> new Tuple2<String, Long>(word, 1L));
		
		JavaPairRDD<String, Long> totals = pairRdd.reduceByKey((value1, value2) -> value1 + value2);
		
		JavaPairRDD<Long, String> switched = totals.mapToPair(tuple -> new Tuple2<Long, String>(tuple._2, tuple._1));
		
		JavaPairRDD<Long, String> sorted = switched.sortByKey(false);

		List<Tuple2<Long, String>> results = sorted.take(10);
		results.forEach(System.out::println);
		
	}
}

```

Collese(), forEach(), collect()

Joins

```java
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.Optional;

import scala.Tuple2;



public class Main {

	public static void main(String[] args) {

		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		List <Tuple2<Integer, Integer>> visitsRaw = new ArrayList<>();
		
		visitsRaw.add(new Tuple2<>(4,18));
		visitsRaw.add(new Tuple2<>(6, 4));
		visitsRaw.add(new Tuple2<>(10,9));
		
		
		List <Tuple2<Integer, String>> usersRaw = new ArrayList<>();
		usersRaw.add(new Tuple2<>(1, "John"));
		usersRaw.add(new Tuple2<>(2, "Bob"));
		usersRaw.add(new Tuple2<>(3, "Alan"));
		usersRaw.add(new Tuple2<>(4, "Doris"));
		usersRaw.add(new Tuple2<>(5, "May"));
		usersRaw.add(new Tuple2<>(6, "Raquel"));
		
		JavaPairRDD<Integer, Integer> visits = sc.parallelizePairs(visitsRaw);
		JavaPairRDD<Integer, String> users = sc.parallelizePairs(usersRaw);
		
		//For Inner Join
		JavaPairRDD<Integer, Tuple2<Integer, String>>joinedRdd = visits.join(users);
		joinedRdd.collect().forEach(System.out::println);

		//For Left Outer Join and extracting name
		JavaPairRDD<Integer, Tuple2<Integer, Optional<String>>> leftJoinedRdd = visits.leftOuterJoin(users);
		leftJoinedRdd.collect().forEach(tuple -> System.out.println(tuple._2._2.orElse("Blank").toUpperCase()));
		
		//For Right Outer Join
		JavaPairRDD<Integer, Tuple2<Optional<Integer>, String>> rightJoinedRdd = visits.rightOuterJoin(users);
		rightJoinedRdd.collect().forEach(it -> System.out.println("User " + it._2._2 + " had " + it._2._1.orElse(0) + " visits."));
		
		// For Outer Join
		JavaPairRDD<Integer, Tuple2<Optional<Integer>, Optional<String>>> fullOuterJoin = visits.fullOuterJoin(users);
		fullOuterJoin.collect().forEach(it -> System.out.println(it));
		
		//Cartesian (Combination)
		JavaPairRDD<Tuple2<Integer, Integer>, Tuple2<Integer, String>> cartesianRdd = visits.cartesian(users);
		cartesianRdd.collect().forEach(System.out::println);
		
		
	}
}

```

Lazy Operations: Doesnt do anything until the count(), take()



```
package com.virtualpairprogrammers;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.Optional;

import scala.Tuple2;

/**
 * This class is used in the chapter late in the course where we analyse viewing figures.
 * You can ignore until then.
 */
public class ViewingFigures 
{
	@SuppressWarnings("resource")
	public static void main(String[] args)
	{
		System.setProperty("hadoop.home.dir", "c:/hadoop");
		Logger.getLogger("org.apache").setLevel(Level.WARN);

		SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		JavaSparkContext sc = new JavaSparkContext(conf);
		
		// Use true to use hardcoded data identical to that in the PDF guide.
		boolean testMode = true;
		
		JavaPairRDD<Integer, Integer> viewData = setUpViewDataRdd(sc, testMode);
		JavaPairRDD<Integer, Integer> chapterData = setUpChapterDataRdd(sc, testMode);
		JavaPairRDD<Integer, String> titlesData = setUpTitlesDataRdd(sc, testMode);

		// Warmup
		JavaPairRDD<Integer, Integer> chapterCountRdd = chapterData.mapToPair(row -> new Tuple2<Integer, Integer>(row._2, 1))
				.reduceByKey((value1, value2) -> value1 + value2);
		//chapterCountRdd.collect().forEach(System.out::println);
		
		//Step 1 - Remove duplicated views.
		viewData = viewData.distinct();
		//viewData.collect().forEach(System.out::println);
		
		//Step 2 Getting the course id.
		JavaPairRDD<Integer, Integer> flippedViewData = viewData.mapToPair(tuple -> new Tuple2<Integer, Integer>(tuple._2, tuple._1));
		JavaPairRDD<Integer, Tuple2<Integer, Integer>> pairedRdd = flippedViewData.join(chapterData);
		//flippedViewData.collect().forEach(System.out::println);

		//Step3 Dont need Chapter ID
		JavaPairRDD<Tuple2<Integer, Integer>, Long> step3 = pairedRdd.mapToPair(row -> {
			
			Integer userId = row._2._1;
			Integer courseId = row._2._2;
			
			return new Tuple2<Tuple2<Integer, Integer>, Long>(new Tuple2<Integer, Integer>(userId, courseId), 1L);
		});
		
		//step3.collect().forEach(System.out::println);
		
		//Step 4 Count the number of view per user.
		step3 = step3.reduceByKey((row1, row2) -> row1 + row2);
		//step3.collect().forEach(System.out::println);
		
		//Step 5 Remove the user Ids
		JavaPairRDD<Integer, Long> step5 = step3.mapToPair(row -> new Tuple2<Integer, Long>(row._1._2,row._2));
		//step5.collect().forEach(System.out::println);
		
		//Step 6 Adding the total chapter count
		JavaPairRDD<Integer, Tuple2<Long, Integer>> step6 = step5.join(chapterCountRdd);
		step6.collect().forEach(System.out::println);

		
		//Step 7 Percentage of Course
		JavaPairRDD<Integer, Double> step7 = step6.mapValues(value -> (double)value._1 / value._2);
		//step7.collect().forEach(System.out::println);
		
		//Step 8 Score based on WCVRP
		JavaPairRDD<Integer, Long> step8 = step7.mapValues(value ->{
			if (value > 0.9) return 10L;
			if (value > 0.5) return 4L;
			if (value > 0.25) return 2L;
			else return 0L;
			});
		//step8.collect().forEach(System.out::println);
		
		//Step 9 Summation
		step8 = step8.reduceByKey((value1, value2) -> value1 + value2);
		//step8.collect().forEach(System.out::println);
		
		//Step 10 
		JavaPairRDD<Integer, Tuple2<Long, String>> step10 = step8.join(titlesData);
		
		JavaPairRDD<Long, String> step11 = step10.mapToPair(row -> new Tuple2<Long, String>(row._2._1, row._2._2));
		step11.sortByKey(false).collect().forEach(System.out::println);

		System.out.println("Please enter something");
		Scanner scanner = new Scanner(System.in);
		scanner.nextLine();
		 
		System.out.println("You didnt enter anything");
		sc.close();
	}
	

	private static JavaPairRDD<Integer, String> setUpTitlesDataRdd(JavaSparkContext sc, boolean testMode) {
		
		if (testMode)
		{
			// (chapterId, title)
			List<Tuple2<Integer, String>> rawTitles = new ArrayList<>();
			rawTitles.add(new Tuple2<>(1, "How to find a better job"));
			rawTitles.add(new Tuple2<>(2, "Work faster harder smarter until you drop"));
			rawTitles.add(new Tuple2<>(3, "Content Creation is a Mug's Game"));
			return sc.parallelizePairs(rawTitles);
		}
		return sc.textFile("src/main/resources/viewing figures/titles.csv")
				                                    .mapToPair(commaSeparatedLine -> {
														String[] cols = commaSeparatedLine.split(",");
														return new Tuple2<Integer, String>(new Integer(cols[0]),cols[1]);
				                                    });
	}

	private static JavaPairRDD<Integer, Integer> setUpChapterDataRdd(JavaSparkContext sc, boolean testMode) {
		
		if (testMode)
		{
			// (chapterId, (courseId, courseTitle))
			List<Tuple2<Integer, Integer>> rawChapterData = new ArrayList<>();
			rawChapterData.add(new Tuple2<>(96,  1));
			rawChapterData.add(new Tuple2<>(97,  1));
			rawChapterData.add(new Tuple2<>(98,  1));
			rawChapterData.add(new Tuple2<>(99,  2));
			rawChapterData.add(new Tuple2<>(100, 3));
			rawChapterData.add(new Tuple2<>(101, 3));
			rawChapterData.add(new Tuple2<>(102, 3));
			rawChapterData.add(new Tuple2<>(103, 3));
			rawChapterData.add(new Tuple2<>(104, 3));
			rawChapterData.add(new Tuple2<>(105, 3));
			rawChapterData.add(new Tuple2<>(106, 3));
			rawChapterData.add(new Tuple2<>(107, 3));
			rawChapterData.add(new Tuple2<>(108, 3));
			rawChapterData.add(new Tuple2<>(109, 3));
			return sc.parallelizePairs(rawChapterData);
		}

		return sc.textFile("src/main/resources/viewing figures/chapters.csv")
													  .mapToPair(commaSeparatedLine -> {
															String[] cols = commaSeparatedLine.split(",");
															return new Tuple2<Integer, Integer>(new Integer(cols[0]), new Integer(cols[1]));
													  	});
	}

	private static JavaPairRDD<Integer, Integer> setUpViewDataRdd(JavaSparkContext sc, boolean testMode) {
		
		if (testMode)
		{
			// Chapter views - (userId, chapterId)
			List<Tuple2<Integer, Integer>> rawViewData = new ArrayList<>();
			rawViewData.add(new Tuple2<>(14, 96));
			rawViewData.add(new Tuple2<>(14, 97));
			rawViewData.add(new Tuple2<>(13, 96));
			rawViewData.add(new Tuple2<>(13, 96));
			rawViewData.add(new Tuple2<>(13, 96));
			rawViewData.add(new Tuple2<>(14, 99));
			rawViewData.add(new Tuple2<>(13, 100));
			return  sc.parallelizePairs(rawViewData);
		}
		
		return sc.textFile("src/main/resources/viewing figures/views-*.csv")
				     .mapToPair(commaSeparatedLine -> {
				    	 String[] columns = commaSeparatedLine.split(",");
				    	 return new Tuple2<Integer, Integer>(new Integer(columns[0]), new Integer(columns[1]));
				     });
	}
}

```

Spark SQL

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		
		
		//SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		//JavaSparkContext sc = new JavaSparkContext(conf);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/exams/students.csv");
		dataset.show();
		
		long numberOfRows = dataset.count();
		
		//System.out.println("There are " + numberOfRows + " records.");
		
		Row firstRow = dataset.first();
		
		String subject = firstRow.getAs("subject").toString();
		System.out.println(subject);
		
		int year = Integer.parseInt(firstRow.getAs("year"));
		System.out.println("The year is " + year);
    
		spark.close();

		}
}
```

Different Approach Same Result

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import static org.apache.spark.sql.functions.*;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		
		
		//SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		//JavaSparkContext sc = new JavaSparkContext(conf);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/exams/students.csv");
		dataset.show();
		
		//3 Approaches
		//Filters (1st method is better, same performance
		//Dataset<Row> modernArtResults = dataset.filter("subject = 'Modern Art' AND year >= 2007");
		//Dataset<Row> modernArtResults = dataset.filter(row -> row.getAs("subject").equals("Modern Art") && Integer.parseInt(row.getAs("year")) >= 2007);
		
		//Column subjectColumn = dataset.col("subject");
		//Column yearColumn = dataset.col("year");
		//Dataset<Row> modernArtResults = dataset.filter(subjectColumn.equalTo("Modern Art").and(yearColumn.geq(2007))); 
		
		//Dataset<Row> modernArtResults = dataset.filter(col("subject").equalTo("Modern Art").and(col("year").geq(2007)));
		//modernArtResults.show();
		
		spark.close();
	 		
		
		}
}


```

Full Syntax SQL

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import static org.apache.spark.sql.functions.*;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		
		
		//SparkConf conf = new SparkConf().setAppName("startingSpark").setMaster("local[*]");
		//JavaSparkContext sc = new JavaSparkContext(conf);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/exams/students.csv");
		//dataset.show();
		
		dataset.createOrReplaceTempView("my_student_table");
		
		//Dataset<Row> results = spark.sql("select score, year from my_student_table where subject ='French'");
		
		//Dataset<Row> results = spark.sql("select max(score) from my_student_table where subject ='French'");

		Dataset<Row> results = spark.sql("select distinct year from my_student_table order by year desc");

		results.show();
		
		spark.close();
	 		
		
		}
}


```

InMemory

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		List<Row> inMemory = new ArrayList<Row>();
		
		inMemory.add(RowFactory.create("WARN", "2016-12-31 04:19:32"));
		inMemory.add(RowFactory.create("FATAL", "2016-12-31 03:22:34"));
		inMemory.add(RowFactory.create("WARN", "2016-12-31 03:21:21"));
		inMemory.add(RowFactory.create("INFO", "2015-4-21 14:32:21"));
		inMemory.add(RowFactory.create("FATAL","2015-4-21 19:23:20"));
		
		StructField[] fields = new StructField[] {
				
				new StructField("level", DataTypes.StringType, false, Metadata.empty()),
				new StructField("datetime", DataTypes.StringType, false, Metadata.empty())
		};
		
		StructType schema = new StructType(fields);
		Dataset<Row> dataset = spark.createDataFrame(inMemory, schema);
		
		dataset.show();
		
		spark.close();
	 		
		
		}
}

```

Grouping and Aggregating

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		List<Row> inMemory = new ArrayList<Row>();
		
		inMemory.add(RowFactory.create("WARN", "2016-12-31 04:19:32"));
		inMemory.add(RowFactory.create("FATAL", "2016-12-31 03:22:34"));
		inMemory.add(RowFactory.create("WARN", "2016-12-31 03:21:21"));
		inMemory.add(RowFactory.create("INFO", "2015-4-21 14:32:21"));
		inMemory.add(RowFactory.create("FATAL","2015-4-21 19:23:20"));
		
		StructField[] fields = new StructField[] {
				new StructField("level", DataTypes.StringType, false, Metadata.empty()),
				new StructField("datetime", DataTypes.StringType, false, Metadata.empty())
		};

		StructType schema = new StructType(fields);
		Dataset<Row> dataset = spark.createDataFrame(inMemory, schema );
		
		dataset.createOrReplaceTempView("logging_table");
		
		//Count
		Dataset<Row> results = spark.sql("select level, count(datetime) from logging_table group by level order by  level");
		
		//Collect
		Dataset<Row> results2 = spark.sql("select level, collect_list(datetime) from logging_table group by level order by  level");

		
		results2.show();
		
		spark.close();
	 		
		
		}
}

```

Datetime

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		List<Row> inMemory = new ArrayList<Row>();
		
		inMemory.add(RowFactory.create("WARN", "2016-12-31 04:19:32"));
		inMemory.add(RowFactory.create("FATAL", "2016-12-31 03:22:34"));
		inMemory.add(RowFactory.create("WARN", "2016-12-31 03:21:21"));
		inMemory.add(RowFactory.create("INFO", "2015-4-21 14:32:21"));
		inMemory.add(RowFactory.create("FATAL","2015-4-21 19:23:20"));
		
		StructField[] fields = new StructField[] {
				new StructField("level", DataTypes.StringType, false, Metadata.empty()),
				new StructField("datetime", DataTypes.StringType, false, Metadata.empty())
		};

		StructType schema = new StructType(fields);
		Dataset<Row> dataset = spark.createDataFrame(inMemory, schema );
		
		dataset.createOrReplaceTempView("logging_table");
		
		//Count
		Dataset<Row> results = spark.sql("select level, count(datetime) from logging_table group by level order by  level");
		
		//Collect
		Dataset<Row> results2 = spark.sql("select level, date_format(datetime,'MM') as month from logging_table");

		
		results2.show();
		
		spark.close();
	 		
		
		}
}


```

Ordering

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		dataset.createOrReplaceTempView("logging_table");
		
		//Count
		//Dataset<Row> results = spark.sql("select level, count(datetime) from logging_table group by level order by  level");
		
		//Collect
		//Dataset<Row> results2 = spark.sql("select level, date_format(datetime,'MMMM') as month from logging_table");
		

		
		results3.createOrReplaceTempView("result_table");
		Dataset<Row> totals = spark.sql("select sum(total) from result_table");
		totals.show(100);

		
		spark.close();
	 		
		
		}
}

```

Ordering 

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		dataset.createOrReplaceTempView("logging_table");
		
		//Two ways
		//Dataset<Row> results3 = spark.sql("select level, date_format(datetime,'MMMM') as month, cast(first(date_format(datetime, 'M')) as Int) as monthNum, count(1) as total from logging_table group by level, month order by monthNum, level");
		//To drop the int column for appearance
		//results3 = results3.drop("monthNum");
		//results3.show(100);

		Dataset<Row> results3 = spark.sql("select level, date_format(datetime,'MMMM') as month, count(1) as total from logging_table group by level, month order by cast(first(date_format(datetime, 'M')) as Int), level");
		results3.show(100);
		
		spark.close();
	 		
		
		}
}
```

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		dataset.createOrReplaceTempView("logging_table");
		
		Dataset<Row> results = spark.sql("select level, date_format(datetime,'MMMM') as month, count(1) as total from logging_table group by level, month order by cast(first(date_format(datetime, 'M')) as Int), level");
		
		//Using Java API but uses  SQL like syntax
		//
		//dataset = dataset.selectExpr("level", "date_format(datetime,'MMMM') as month");
		
		//Using Java API 
		dataset = dataset.select(col("level"), date_format(col("datetime"), "MMMM").alias("month"));
		
		dataset.show(100);
		
		spark.close();
	 		
		
		}
}

```

GroupBy

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		
		//Using SQL Method
		//dataset.createOrReplaceTempView("logging_table");
		//Dataset<Row> results = spark.sql("select level, date_format(datetime,'MMMM') as month, count(1) as total from logging_table group by level, month order by cast(first(date_format(datetime, 'M')) as Int), level");
		//results.show(100);
		//Using Java API but uses  SQL like syntax
		//dataset = dataset.selectExpr("level", "date_format(datetime,'MMMM') as month");
		
		//Using Java API 
		//dataset = dataset.select(col("level"), date_format(col("datetime"), "MMMM").alias("month"),
		//date_format(col("datetime"),"M").alias("monthNum").cast(DataTypes.IntegerType));
		
		dataset = dataset.groupBy(col("level"), col("month"), col("monthNum")).count();
		dataset = dataset.orderBy(col("monthNum"), col("level"));
		dataset = dataset.drop(col("monthNum"));
		dataset.show(100);
		
		spark.close();
	 		
		}
}
```

Pivot Table

- is used when 2 grouping and 1 aggregation,
- we will take month column -> make each month a new column.
- Previously we had duplicate INFO, FATAL, WARN -> Now we will have only 3 rows.
- Not possible to do pivot using sql syntax.(partially)

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		dataset = dataset.select(col("level"),
				date_format(col("datetime"),"MMMM").alias("month"),
				date_format(col("datetime"), "M").alias("monthNum").cast(DataTypes.IntegerType));

		
		//1st Method
		//Optimised
		Object[] months = new Object[] {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "sd"};
		List<Object> columns = Arrays.asList(months);
		//2nd Method
		//List<Object> columns = new ArrayList<Object>();
		//columns.add("March");
		
		dataset = dataset.groupBy("level").pivot("month", columns).count().na().fill(0);
		dataset.show(100);
		
		spark.close();
	 		
		}
}
```

Agg

```java
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import static org.apache.spark.sql.functions.*;
import org.apache.spark.sql.types.DataTypes;

public class ExamResults {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/exams/students.csv");
		
		//Aggs methods are more flexible, allows multiple aggregations
		dataset = dataset.groupBy("subject").agg(max(col("score").cast(DataTypes.IntegerType)).alias("max score"),
												min(col("score").cast(DataTypes.IntegerType)).alias("Min Score"));
		
		dataset.show(100);

	}

}
```

Taking avg and std using pivot and ags

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.functions;

import static org.apache.spark.sql.functions.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.spark.sql.types.DataTypes;

public class ExamResults {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/exams/students.csv");
		
		dataset = dataset.groupBy("subject").pivot("year").agg(round(functions.avg(col("score")), 2).alias("AVG Score"),
												round(stddev("score"),2).alias("STD Score"));
		
		dataset.show(100);

	}
}

```

UDF on SQL

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		SimpleDateFormat input = new SimpleDateFormat("MMMM");
		SimpleDateFormat output = new SimpleDateFormat("M");
		
		spark.udf().register("monthNum", (String month) -> {
			
			java.util.Date inputDate = input.parse(month);
			
			return Integer.parseInt(output.format(inputDate));
			
			
		}, DataTypes.IntegerType);
		
		dataset.createOrReplaceTempView("logging_table");
		Dataset<Row> results = spark.sql("select level, date_format(datetime,'MMMM') as month, count(1) as total" + 
						" from logging_table group by level, month order by monthNum(month), level");
		
		
		results.show();
		
		spark.close();
		

		}
}
```

Comparing performance of sql and java syntax....java is faster here why??

```
package com.virtualpairprogrammers;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.spark.sql.Column;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.RowFactory;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.types.DataTypes;
import org.apache.spark.sql.types.Metadata;
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;

import static org.apache.spark.sql.functions.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main{
	
	public static void main(String[] args) {
		
		Logger.getLogger("org.apache").setLevel(Level.WARN);
		
		SparkSession spark = SparkSession.builder().appName("testingSql").master("local[*]").getOrCreate();
		
		
		spark.conf().set("spark.sql.shuffle.partitions", "48");
		
		Dataset<Row> dataset = spark.read().option("header", true).csv("src/main/resources/biglog.txt");
		
		//Comparing SQL with Java
		//Java is faster 
		//SQL
		dataset.createOrReplaceTempView("logging_table");
		
		Dataset<Row> results = spark.sql("select level, date_format(datetime,'MMMM') as month, count(1) as total" + 
						" from logging_table group by level, month order by cast(first(date_format(datetime, 'M')) as int), level");
		
		results.show();
		
//		Java
//		dataset = dataset.select(col("level"),
//				date_format(col("datetime"), "MMMM").alias("month"),
//				date_format(col("datetime"),"M").alias("monthNum").cast(DataTypes.IntegerType));
//		
//		dataset = dataset.groupBy("level", "monthNum").count().as("total").orderBy("monthNum");
//		dataset = dataset.drop("monthNum");
//		
//		dataset.show(100);
		
		Scanner scanner = new Scanner(System.in);
		scanner.nextLine();
		
		spark.close();
		

		}
}
```

HashArguments is the reason



```

== Physical Plan ==
*(3) Project [level#10, month#14, total#15L]
+- *(3) Sort [aggOrder#45 ASC NULLS FIRST, level#10 ASC NULLS FIRST], true, 0
   +- Exchange rangepartitioning(aggOrder#45 ASC NULLS FIRST, level#10 ASC NULLS FIRST, 200)
      +- SortAggregate(key=[level#10, date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai))#47], functions=[count(1), first(date_format(cast(datetime#11 as timestamp), M, Some(Asia/Dubai)), false)])
         +- *(2) Sort [level#10 ASC NULLS FIRST, date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai))#47 ASC NULLS FIRST], false, 0
            +- Exchange hashpartitioning(level#10, date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai))#47, 200)
               +- SortAggregate(key=[level#10, date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai)) AS date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai))#47], functions=[partial_count(1), partial_first(date_format(cast(datetime#11 as timestamp), M, Some(Asia/Dubai)), false)])
                  +- *(1) Sort [level#10 ASC NULLS FIRST, date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai)) AS date_format(cast(datetime#11 as timestamp), MMMM, Some(Asia/Dubai))#47 ASC NULLS FIRST], false, 0
                     +- *(1) FileScan csv [level#10,datetime#11] Batched: false, Format: CSV, Location: InMemoryFileIndex[file:/Users/saadshamim/Documents/Practicals/Starting Workspace/Project/src/main..., PartitionFilters: [], PushedFilters: [], ReadSchema: struct<level:string,datetime:string>

```

```

== Physical Plan ==
*(3) Project [level#10, count#24L]
+- *(3) Sort [monthNum#16 ASC NULLS FIRST], true, 0
   +- Exchange rangepartitioning(monthNum#16 ASC NULLS FIRST, 200)
      +- *(2) HashAggregate(keys=[level#10, monthNum#16], functions=[count(1)])
         +- Exchange hashpartitioning(level#10, monthNum#16, 200)
            +- *(1) HashAggregate(keys=[level#10, monthNum#16], functions=[partial_count(1)])
               +- *(1) Project [level#10, cast(date_format(cast(datetime#11 as timestamp), M, Some(Asia/Dubai)) as int) AS monthNum#16]
                  +- *(1) FileScan csv [level#10,datetime#11] Batched: false, Format: CSV, Location: InMemoryFileIndex[file:/Users/saadshamim/Documents/Practicals/Starting Workspace/Project/src/main..., PartitionFilters: [], PushedFilters: [], ReadSchema: struct<level:string,datetime:string>

```

Sorting Aggregation

- It will sort the rows and then gather together the matching rows.
- Performance O(n*logn)
- But memory efficient

Hash Aggregation 

- It will create a composite using the grouping columns using that to create a unique hash key
- Performance O(n)
- Memory needed (but its fine.)
- Stored in real native memory.

Why some sorting and some time hash

Hash is used where ever data is mutable. Only the ones which are writable.

IntegerType, BooleanType, FloatType,.....