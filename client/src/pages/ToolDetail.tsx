import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Check, X, HelpCircle } from "lucide-react";
import { MULTIMODAL_TOOLS, toKebabCase, getSupportedModalities, findRelatedTools, getCategoryRoute, type MultimodalTool } from "../../../shared/multimodalTools";

export default function ToolDetail() {
  const params = useParams();
  const toolSlug = params.slug;

  // Find the tool by matching the kebab-case slug
  const tool = MULTIMODAL_TOOLS.find(t => toKebabCase(t.name) === toolSlug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tool Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The tool you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedTools = findRelatedTools(tool, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </a>
          </Link>

          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {tool.primaryCategory}
                </p>
              </div>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap w-full sm:w-auto justify-center"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {tool.description || `${tool.name} is a multimodal AI platform that supports ${getSupportedModalities(tool)}.`}
            </p>
          </div>

          {/* Use Cases Section */}
          {tool.useCases && tool.useCases.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Use Cases & Examples
              </h2>
              <div className="grid gap-3 sm:gap-4">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Breakdown */}
          {tool.pricingDetails && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Pricing
              </h2>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
                {tool.pricingDetails.free && (
                  <div className="p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Free Tier</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{tool.pricingDetails.free}</p>
                  </div>
                )}
                {tool.pricingDetails.paid && (
                  <div className="p-4 sm:p-6 border-2 border-blue-500 dark:border-blue-400 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Paid Plans</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{tool.pricingDetails.paid}</p>
                  </div>
                )}
                {tool.pricingDetails.enterprise && (
                  <div className="p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{tool.pricingDetails.enterprise}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Features */}
          {tool.keyFeatures && tool.keyFeatures.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Key Features
              </h2>
              <ul className="grid gap-2 sm:gap-3">
                {tool.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pros & Cons */}
          {((tool.pros && tool.pros.length > 0) || (tool.cons && tool.cons.length > 0)) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Pros & Cons
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {tool.pros && tool.pros.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-green-600 dark:text-green-400 mb-3">Pros</h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {tool.cons && tool.cons.length > 0 && (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-red-600 dark:text-red-400 mb-3">Cons</h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Capability Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Multimodal Capabilities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-2 sm:px-4 text-gray-900 dark:text-white font-semibold text-sm sm:text-base">
                      Capability
                    </th>
                    <th className="text-left py-3 px-2 sm:px-4 text-gray-900 dark:text-white font-semibold text-sm sm:text-base">
                      Support
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Text</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.text)}`}>
                        {tool.text}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Image</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.image)}`}>
                        {tool.image}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Video</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.video)}`}>
                        {tool.video}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Audio</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.audio)}`}>
                        {tool.audio}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Code</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.code)}`}>
                        {tool.code}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 sm:px-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">Reasoning</td>
                    <td className="py-3 px-2 sm:px-4">
                      <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCapabilityBadgeClass(tool.reasoning)}`}>
                        {tool.reasoning}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Similar Tools */}
          {relatedTools.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Similar Tools You Might Like
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedTools.map((relatedTool) => (
                  <Link key={relatedTool.name} href={`/tool/${toKebabCase(relatedTool.name)}`}>
                    <a className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                            {relatedTool.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {relatedTool.primaryCategory}
                          </p>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180 flex-shrink-0 ml-2" />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {tool.faqs && tool.faqs.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {tool.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-8 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getCapabilityBadgeClass(support: string): string {
  switch (support) {
    case "Yes":
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
    case "Limited":
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
    case "No":
      return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
    default:
      return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
  }
}
