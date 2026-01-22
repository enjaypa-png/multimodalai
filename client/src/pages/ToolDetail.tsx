import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  const relatedTools = findRelatedTools(tool, 2);
  const categoryRoute = getCategoryRoute(tool.primaryCategory);
  const description = `${tool.name} is a multimodal AI platform that supports ${getSupportedModalities(tool)}.`;

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
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {description}
            </p>
          </div>

          {/* Capability Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Multimodal Capabilities
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">
                      Capability
                    </th>
                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">
                      Support
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Text</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.text)}`}>
                        {tool.text}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Image</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.image)}`}>
                        {tool.image}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Video</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.video)}`}>
                        {tool.video}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Audio</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.audio)}`}>
                        {tool.audio}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Code</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.code)}`}>
                        {tool.code}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Reasoning</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getCapabilityBadgeClass(tool.reasoning)}`}>
                        {tool.reasoning}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Related Multimodal Tools
              </h2>
              <div className="grid gap-4">
                {relatedTools.map((relatedTool) => (
                  <Link key={relatedTool.name} href={`/tool/${toKebabCase(relatedTool.name)}`}>
                    <a className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {relatedTool.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {relatedTool.primaryCategory}
                          </p>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Category Link */}
          {categoryRoute && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Explore More Tools
              </h2>
              <Link href={categoryRoute}>
                <a className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  View all tools in {tool.primaryCategory}
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </Link>
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
